const DEBUG = true;
let X = NaN;
let Y = NaN;
let OP = "";
let Display = "";
let Clear = false;

function btnClick(event) {
    if (DEBUG) {
        console.log("clicked", event);
        console.log(X, OP, Y)
    }

    if ("0" <= event && event <= "9") {
        if (Clear) {
            X = parseInt(Display);
            Display = "";
            Clear = false;
        }
        Display += event;
    }
    else if (["+", "-", "*", "/"].includes(event)) {
        OP = event;
        Clear = true;
    }
    else if (event == "clear") {
        X = NaN;
        OP = "";
        Clear = false;
        Display = "";
    }
    else if (event === "=") {
        Y = parseInt(Display);
        Display = compute(X, OP, Y);
        X = parseInt(Display);
    }

    document.getElementById("display").textContent = Display;
}

function compute(x, operand, y) {
    let res = 0;
    switch (operand) {
        case "+":
            res = add(x, y);
            break;
        case "-":
            res = substract(x, y)
            break;
        case "*":
            res = mutiply(x, y)
            break;
        case "/":
            res = divide(x, y)
            break;
    }
    return res;
}

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function mutiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return NaN;
    }
    return Math.floor(x / y);
}