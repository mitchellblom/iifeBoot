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
                // writeToTable.innerHTML += `<thead>`;
                // writeToTable.innerHTML += `<tr>`;
                // writeToTable.innerHTML += `<th>Name</th>`;
                // writeToTable.innerHTML += `<th>Email</th>`;  
                // writeToTable.innerHTML += `<th>Amount</th>`;
                // writeToTable.innerHTML += `</tr>`;
                // writeToTable.innerHTML += `</thead>`;
            for (var i = 0; i < 1; i++) {
                writeToTable.innerHTML += `<tr>`;
                writeToTable.innerHTML += `<td>${donorArray[i].name}</td>`;
                writeToTable.innerHTML += `<td>${donorArray[i].email}</td>`;
                writeToTable.innerHTML += `<td>${donorArray[i].amount}</td>`;
                writeToTable.innerHTML += `</tr>`;
            }
        }
    }
})();