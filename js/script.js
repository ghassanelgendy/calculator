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
let equation = [];
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
	equation = [];
	first = 0;
	res = 0;
	second = 0;
}
numbers.forEach(
	(
		number //awel rakam input
	) =>
		number.addEventListener("click", (e) => {
			firstOperand.push(number.textContent.replace(/\s/g, ""));
			equation.push(number.textContent.replace(/\s/g, ""));
			updateScreen(equation.join().replace(/,/g, ""));
		})
);
operators.forEach((operator) =>
	operator.addEventListener("click", (e) => {
		operatorSign = operator.textContent;
		first = parseInt(firstOperand.join().replace(/,/g, ""));
		equation.push(operator.textContent.replace(/\s/g, ""));
		console.log("wahed", first);

		firstOperand = [];
		secondOperand = [];

		numbers.forEach(
			(
				number //tany rakam input
			) =>
				number.addEventListener("click", (e) => {
					if (first) {
						secondOperand.push(number.textContent.replace(/\s/g, ""));
						second = parseInt(secondOperand.join().replace(/,/g, ""));
						updateScreen(equation.join().replace(/,/g, ""));
						console.log("HOPOOOOOOOO", secondOperand);
						console.log("etnen", second);
					}
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
	console.log(res);
	currentlyDisplaying = res.toString();
	updateScreen(currentlyDisplaying);
}

function multiply(x, y) {
	res = x * y;
}

function divide(x, y) {
	res += x / y;
}

function add(x, y) {
	res += x + y;
}

function minus(x, y) {
	res += x - y;
}
