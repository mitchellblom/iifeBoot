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
            for (var i = 0; i < 1; i++) {
                tableString += `<tr id="donorData">`;
                tableString += `<td>${donorArray[i].name}</td>`;
                tableString += `<td>${donorArray[i].email}</td>`;
                tableString += `<td>$ ${donorArray[i].amount}</td>`;
                tableString += `</tr>`;
                writeToTable.innerHTML += tableString;
            }
        },
        isNumberKey: function(evt)
         {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
    }
})();