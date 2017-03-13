var DonorInfo = (function() {

	var donorArray = [];

		return {
			addDonorToArray: function (newDonor) {
				donorArray.push(newDonor);
			},
			queryDonor: function () {
				return donorArray;
			},
			printToTable: function(newDonor) {
				var table = document.getElementById("table");
				var tableString = `<th>${newDonor.name}</th>` 
				tableString += `<tr>${newDonor.email}</tr>`;
				tableString += `<tr>${newDonor.amount}</tr>`;
				for (var i = 0; i < donorArray.length; i++){
					table.innerHTML += donorArray[i].name;
				}
			}
		}
})();