 function buildTable() {
    var table = document.createElement("table");
  
    var field = Object.keys(data[0]);
    var times =[0,1,2,3,4,5,6,7,8,9,10,11,12];
 for (index = 0; index < times.length; index++) {
        feild += "<tr>" + times[index] + "</tr>";
    }
    field += "</tr>";
    document.getElementById("timesTable").innerHTML = feild;
}
    data.forEach(function[0] {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number")
          cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  document.body.appendChild(timesTable(inputNumber));
