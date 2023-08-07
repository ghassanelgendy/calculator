const numbers = document.querySelectorAll(".number-button");
const operators = document.querySelectorAll(".operator");
const screen = document.getElementById("displaying-screen");
const equal = document.getElementById("equals");
const AC = document.getElementById("AC");

let firstOperation = true;
let first = 0;
let second = 0;
let res = 0;
let firstOperand = [];
let secondOperand = [];
let currentlyDisplaying = "0";
let operatorSign = null;
let operatorClicked = false;
let equation = [];

screen.textContent = currentlyDisplaying;

function updateScreen(text) {
	if (text.length < 15) {
		screen.textContent = text;
	}
}

function clearAll() {
	firstOperand = [];
	secondOperand = [];
	first = 0;
	second = 0;
	operatorSign = null;
	operatorClicked = false;
	equation = [];
	res = 0;
}

AC.addEventListener("click", (e) => {
	clearAll();
	screen.textContent = "0";
});

numbers.forEach((number) =>
	number.addEventListener("click", (e) => {
		if (!operatorClicked) {
			firstOperand.push(number.textContent.replace(/\s/g, ""));
			first = parseInt(firstOperand.join().replace(/,/g, ""));
			equation.push(number.textContent.replace(/\s/g, ""));
			updateScreen(equation.join().replace(/,/g, ""));
		} else {
			secondOperand.push(number.textContent.replace(/\s/g, ""));
			second = parseInt(secondOperand.join().replace(/,/g, ""));
			equation.push(number.textContent.replace(/\s/g, ""));
			updateScreen(equation.join().replace(/,/g, ""));
		}
	})
);
operators.forEach((operator) =>
	operator.addEventListener("click", (e) => {
		operatorSign = operator.textContent;
		first = parseInt(firstOperand.join().replace(/,/g, ""));
		equation.push(operator.textContent.replace(/\s/g, ""));
		updateScreen(equation.join().replace(/,/g, ""));
		operatorClicked = true;
	})
);

equal.addEventListener("click", (e) => {
	console.log("me two ", second);
	console.log("me first ", first);
	console.log("me op ", operatorSign);
	console.log("me res");
	operate(first, operatorSign, second);
	firstOperation = false;

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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalButton"); // Add an ID to the button you want to use to open the pop-up

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
