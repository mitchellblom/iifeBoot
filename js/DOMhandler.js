/////////////// REFERENCES ///////////////////////////

var newDonor = {};
var donateButton = document.getElementById("donate-button");
var cancelButton = document.getElementById("cancel-button");

////////////// LISTENERS /////////////////////////////

donateButton.addEventListener("click", function() {
	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
	DonorInfo.addDonorToArray(newDonor);
	DonorInfo.printToTable(newDonor);
});

document.onkeydown = function() {
 if (window.event.keyCode === 13) {
 	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
 	DonorInfo.addDonorToArray(newDonor);
   	DonorInfo.printToTable(newDonor);
 }
};

cancelButton.addEventListener("click", function() {
	console.log("cancel button works");
	// DonorInfo.donorArray = [];
});