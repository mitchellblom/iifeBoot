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
				var writeToTable = document.getElementById("table");
					writeToTable.innerHTML += `<table class="table table-bordered table-striped table-condensed">`
					writeToTable.innerHTML += `<tr><th>Name</th><th>Email</th><th>Amount</th></tr>`
				for (var i = 0; i < 1; i++){
					writeToTable.innerHTML += `<tr>`;
					writeToTable.innerHTML += `<td>${donorArray[i].name}</td>`;
					writeToTable.innerHTML += `<td>${donorArray[i].email}</td>`;
					writeToTable.innerHTML += `<td>${donorArray[i].amount}</td>`;
					writeToTable.innerHTML += `</tr>`;
				}
					writeToTable.innerHTML += `</table>`;
			}
		}
})();

// 						<tr>
// 				   			<td>Jane Doe</td>
// 				   			<td>jdoe2@deer.com</td>
// 				   			<td>$88</td>
// 				   			<td>Lump Sum</td>
//  					</tr>