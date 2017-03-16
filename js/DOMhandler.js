/////////////// REFERENCES ///////////////////////////

var newDonor = {};
var donateButton = document.getElementById("donate-button");
var cancelButton = document.getElementById("cancel-button");
var writeToTableDom = document.getElementById("table");
var alphaTextInputsForm = document.getElementsByClassName("alpha-inputs");
var allTextInputsForm = document.getElementsByClassName("all-text-inputs");

////////////// LISTENERS /////////////////////////////

donateButton.addEventListener("click", writeDonorInfoToDom);

// document.addEventListener("keyup", function() {
// 	for (var i = 0; i < alphaTextInputsForm.length; i++) {
// 		console.log("in text for loop");
// 	    alphaTextInputsForm[i].addEventListener("keyup", alphaOnly);
// 	};
// });

document.onkeydown = function() {
	if (window.event.keyCode === 13) {
 	writeDonorInfoToDom()
 	}
};

cancelButton.addEventListener("click", function() {
	writeToTableDom.innerHTML = "";
});

////////////// LOGIC /////////////////////////////////

// function alphaOnly(event) {
//   var key = event.keyCode;
//   return ((key >= 65 && key <= 90) || key == 8);
// };

function writeDonorInfoToDom() {
	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
	if (newDonor.name === "" || newDonor.email === "" || newDonor.amount === "") {
		alert("All fields must be complete!")
	} else {
	DonorInfo.addDonorToArray(newDonor);
	DonorInfo.printToTable(newDonor);
	// console.log(allTextInputsForm);
	// for (var i = 0; i < allTextInputsForm.length; i++) {
	// 	console.log("for loop to clear inputs");
	// 	// console.log(allTextInputsForm[i]);
	// 	allTextInputsForm[i].value = "";
	// }
	};
};