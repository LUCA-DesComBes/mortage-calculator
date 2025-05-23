const amountInput = document.getElementById("amount");
const termInput = document.getElementById("term");
const rateInput = document.getElementById("rate");
const calculateBtn = document.querySelector(".calculate-btn");
const divOne = document.querySelector(".result-section-container.not-empty");
const divTwo = document.querySelector(".result-section-container.empty");
const sectionOne = document.querySelector(".result-section");
const h1 = document.querySelector(".result-box h1");
const h3 = document.querySelector(".result-box h3");
const pError = document.querySelectorAll(".error.hidden");
const unitSpan = document.querySelectorAll(".unit");

console.log(divOne);
console.log(divTwo);

function calculateRepayments(e) {
	e.preventDefault();
	console.log(amountInput.value);
	let amountParseInt = parseFloat(amountInput.value);
	let termParseInt = parseFloat(termInput.value);
	let rateParseInt = parseFloat(rateInput.value);

	let bjr = termParseInt * 12;

	let valueRate = (amountParseInt * rateParseInt) / 100;

	let gvyuk = amountParseInt + valueRate;

	console.log(gvyuk / bjr);

	divTwo.remove();

	divOne.style.display = "block";

	h1.textContent = `£${(gvyuk / bjr).toFixed(2)}`;
	h3.textContent = `£${gvyuk.toFixed(3)}`;
}

calculateBtn.addEventListener("click", calculateRepayments);
