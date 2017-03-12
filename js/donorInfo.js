var DonorInfo = (function() {

	var donorArray = [];

		return {
			addDonorToArray: function (newDonor) {
				donorArray.push(newDonor);
			},
			queryDonor: function () {
				return donorArray;
			} 
			printToTable: function() {
				var table = document.getElementById("table");
				var tableString += `<table>` 
				var tableString += `<th>`;
				for (var i = 0; i < donorArray.length; i++){
					// thisDivElement += donorArray[i].name
				}
			}
		}
})();