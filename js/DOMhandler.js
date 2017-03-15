/////////////// REFERENCES ///////////////////////////

var newDonor = {};
var donateButton = document.getElementById("donate-button");
var cancelButton = document.getElementById("cancel-button");

////////////// LISTENERS /////////////////////////////

donateButton.addEventListener("click", writeDonorInfoToDom);


document.onkeydown = function() {
 if (window.event.keyCode === 13) {
 	writeDonorInfoToDom()
 }
};

cancelButton.addEventListener("click", function() {
	console.log("cancel button works");
	// var toClear = document.getElementById("donorData");
	// toClear.map.prototype.clear();
});


////////////// LOGIC /////////////////////////////////

function writeDonorInfoToDom() {
	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
	DonorInfo.addDonorToArray(newDonor);
	DonorInfo.printToTable(newDonor);
};