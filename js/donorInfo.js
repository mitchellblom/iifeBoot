var DonorInfo = (function() {

    var donorArray = [];

    return {
        addDonorToArray: function(newDonor) {
            donorArray.push(newDonor);

        },
        queryDonor: function() {
            return donorArray;
        },
        printToTable: function(newDonor) {
            var writeToTable = document.getElementById("table");
            var tableString = "";
                // tableString.innerHTML += `<thead>`;
                // tableString.innerHTML += `<tr>`;
                // tableString.innerHTML += `<th>Name</th>`;
                // tableString.innerHTML += `<th>Email</th>`;  
                // tableString.innerHTML += `<th>Amount</th>`;
                // tableString.innerHTML += `</tr>`;
                // tableString.innerHTML += `</thead>`;
            for (var i = 0; i < 1; i++) {
                console.log("entered for loop");
                tableString += `<tr>`;
                tableString += `<td>${donorArray[i].name}</td>`;
                tableString += `<td>${donorArray[i].email}</td>`;
                tableString += `<td>${donorArray[i].amount}</td>`;
                tableString += `</tr>`;
                writeToTable.innerHTML += tableString;
            }
        }
    }
})();