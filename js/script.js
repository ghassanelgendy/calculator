const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operator");
const screen = document.getElementById("displaying-screen");
const equal = document.getElementById("equals");
const AC = document.getElementById("AC");
AC.addEventListener("click", (e) => {
	clearAll();
	updateScreen("0");
});
let first;
let second;
let firstOperand = [];
let secondOperand = [];
let currentlyDisplaying;
let operatorSign;
let res = 0;
screen.textContent = currentlyDisplaying;
function updateScreen(text) {
	if (text.length < 15) {
		screen.textContent = text;
	}
}
function clearAll() {
	currentlyDisplaying = 0;
	firstOperand = [];
	secondOperand = [];
	first = 0;
	res = 0;
	second = 0;
}
numbers.forEach((number) =>
	number.addEventListener("click", (e) => {
		firstOperand.push(number.textContent.replace(/\s/g, ""));
		updateScreen(firstOperand.join().replace(/,/g, ""));
	})
);
operators.forEach((operator) =>
	operator.addEventListener("click", (e) => {
		operatorSign = operator.textContent;
		first = parseInt(firstOperand.join().replace(/,/g, ""));
		firstOperand.push(operator.textContent.replace(/\s/g, ""));
		firstOperand = [];
		numbers.forEach((number) =>
			number.addEventListener("click", (e) => {
				secondOperand.push(number.textContent.replace(/\s/g, ""));
				console.log();
				second = parseInt(secondOperand.join().replace(/,/g, ""));
				currentlyDisplaying += secondOperand.join().replace(/,/g, "");
				updateScreen(second);
				secondOperand = [];
			})
		);
	})
);
equal.addEventListener("click", (e) => {
	console.log("me two ", second);
	console.log("me first ", first);
	console.log("me op ", operatorSign);

	operate(first, operatorSign, second);
	clearAll();
});
function operate(first, operator, second) {
	switch (operator) {
		case "*":
			multiply(first, second);
			break;
		case "/":
			divide(first, second);
			break;
		case "+":
			add(first, second);
			break;
		case "-":
			minus(first, second);
			break;
	}
}

function multiply(firstOperand, secondOperand) {
	res = firstOperand * secondOperand;
	console.log(res);
	currentlyDisplaying = res.toString();
	updateScreen(currentlyDisplaying);
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
