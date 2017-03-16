/////////////// REFERENCES ///////////////////////////

var newDonor = {};
var donateButton = document.getElementById("donate-button");
var cancelButton = document.getElementById("cancel-button");
var writeToTableDom = document.getElementById("table");
var alphaTextInputsForm = document.getElementsByClassName("alpha-inputs");
var allTextInputsForm = document.getElementsByClassName("all-text-inputs");
var walkerName = document.getElementById("name");
var email = document.getElementById("email");
var amount = document.getElementById("amount");

////////////// LISTENERS /////////////////////////////

donateButton.addEventListener("click", writeDonorInfoToDom);

document.onkeydown = function() {
	if (window.event.keyCode === 13) {
 	writeDonorInfoToDom()
 	}
};

cancelButton.addEventListener("click", function() {
	writeToTableDom.innerHTML = "";
});

////////////// LOGIC /////////////////////////////////

function writeDonorInfoToDom() {
	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
	if (newDonor.name === "" || newDonor.email === "" || newDonor.amount === "") {
		alert("All fields must be complete!")
	} else {
	DonorInfo.addDonorToArray(newDonor);
	DonorInfo.printToTable(newDonor);
	clearAllInputs();
	};
};

function clearAllInputs() {
	walkerName.value = "";
	email.value = "";
	amount.value = "";
};