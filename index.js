const DEBUG = true;
let X = 0;
let Y = 0;
let OP = "+";
let Display = "";

main();

function main() {
}

function btnClick(event) {
    if (DEBUG) {
        console.log("clicked", event);
    }

    if ("0" <= event && event <= "9") {
        Display += event;
    }
    else if (["+", "-", "*", "/"].includes(event)) {
        Display = "";
        OP = event;
    }

    document.getElementById("display").textContent = Display;
}

function operate() {
    // Get input values
    const x = parseFloat(document.getElementById("x").value.toString());
    const y = parseFloat(document.getElementById("y").value.toString());
    const operand = document.getElementById("operand").value.toString();

    const res = compute(x, operand, y);

    // Display result
    const inputs = [x, operand, y];
    const operation = inputs.join(" ");

    const result = document.getElementById("result");
    // Remove previous result content
    while (result.firstChild) {
        result.firstChild.remove();
    }
    var p = document.createElement("p");
    p.textContent = res;
    result.appendChild(p);

    if (DEBUG) {
        console.log(operation);
        console.log(res);
    }
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
    return x / y;
}