const DEBUG = true;

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