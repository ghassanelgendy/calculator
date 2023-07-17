const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operator");
let res = 0;
numbers.forEach((number) => number.addEventListener("click", (e) => {}));
operators.forEach((operator) => operator.addEventListener("click", (e) => {}));

function add(firstOperand, secondOperand) {
	res += firstOperand * secondOperand;
}
function multiply(firstOperand, secondOperand) {
	res += firstOperand * secondOperand;
}
function divide(firstOperand, secondOperand) {
	res += firstOperand * secondOperand;
}
function minus(firstOperand, secondOperand) {
	res += firstOperand - secondOperand;
}
