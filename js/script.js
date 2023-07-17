const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operator");

let firstOperand = 0;
let secondOperand = 0;
let operator;
let res = 0;

numbers.forEach((number) => number.addEventListener("click", (e) => {}));
operators.forEach((operator) => operator.addEventListener("click", (e) => {}));

function operate(firstOperand, operator, secondOperand) {
	switch (operator) {
		case "*":
			multiply(firstOperand, secondOperand);
			break;
		case "/":
			divide(firstOperand, secondOperand);
			break;
		case "+":
			add(firstOperand, secondOperand);
			break;
		case "-":
			minus(firstOperand, secondOperand);
	}
}

function multiply(firstOperand, secondOperand) {
	res += firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
	res += firstOperand * secondOperand;
}

function add(firstOperand, secondOperand) {
	res += firstOperand * secondOperand;
}

function minus(firstOperand, secondOperand) {
	res += firstOperand - secondOperand;
}
