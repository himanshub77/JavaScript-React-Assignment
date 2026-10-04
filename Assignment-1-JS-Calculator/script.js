function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    let result;

    switch (operation) {

        case "add":
            result = num1 + num2;
            break;

        case "subtract":
            result = num1 - num2;
            break;

        case "multiply":
            result = num1 * num2;
            break;

        case "divide":

            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }

            break;

        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerText = "Result: " + result;
}