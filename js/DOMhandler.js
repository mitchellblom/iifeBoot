/////////////// REFERENCES ///////////////////////////

var newDonor = {};
var donateButton = document.getElementById("donate-button");



////////////// LISTENERS /////////////////////////////

donateButton.addEventListener("click", function() {
	newDonor.name = document.getElementById("name").value;
	newDonor.email = document.getElementById("email").value;
	newDonor.amount = document.getElementById("amount").value;
	// console.log("donate button works:", newDonor);
	DonorInfo.addDonorToArray(newDonor);
	// console.log("donor array", DonorInfo.queryDonor());
	DonorInfo.printToTable(newDonor);
});