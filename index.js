//Variables//

let row = null;                                                     

function Submit() {                       //SUBMIT BUTTON FUNCTION//
    let dataEntered = retrieveData();
    let readData = readingDataFromLocalStorage(dataEntered);
    if (row == null) {
        insert(readData);                                                      //Creates a Record in table message based on 'if-else' loop//
        msg.innerHTML = "Record Created!";
    } else {
    updateRecord();                                                            //Edits a Record in table message using 'updateRecord' function//
    msg.innerHTML = "Record Updated!";
    }
}

    //CREATE: GENERATING DATA IN FIELDS OF TABLE//

function retrieveData () {
    let name1 = document.getElementById("name").value;
    let email1 = document.getElementById("email").value;
    let dob1 = document.getElementById("bday").value;

    let arr = [name1, email1, dob1];
    return arr;
}


    //READ: DATA IN LOCAL STORAGE//

function readingDataFromLocalStorage(dataEntered) {
    let n = localStorage.setItem("Name", dataEntered[0]);
    let e = localStorage.setItem("Email", dataEntered[1]);
    let d = localStorage.setItem("Birthday", dataEntered[2]);

    //Getting values from local storage to store in table//

    let n1 = localStorage.getItem("Name", n);
    let e1 = localStorage.getItem("Email", e);
    let d1 = localStorage.getItem("Birthday", d);

    let arr = [n1, e1, d1];
    return arr;

}

    //INSERTING RECORDS INTO TABLES//

function insert(readData) {
    let row = table.insertRow();
     row.insertCell(0).innerHTML = readData[0];             //Calls data using the 'readData' function to insert data into table//
     row.insertCell(1).innerHTML = readData[1];
     row.insertCell(2).innerHTML = readData[2];
     row.insertCell(3).innerHTML = '<button onclick = edit(this)>Edit</button> <button onclick = deleteRecord(this)>Delete</button>'; 
}    

    //EDITING RECORDS//

    function edit(td) {
        row = td.parentElement.parentElement;                       
        document.getElementById("name").value = row.cells[0].innerHTML;
        document.getElementById("email").value = row.cells[1].innerHTML;
        document.getElementById("bday").value = row.cells[2].innerHTML;
    }

    //UPDATING RECORD//

    function updateRecord() {
        row.cells[0].innerHTML = document.getElementById("name").value    //Edits the data within the table//
        row.cells[1].innerHTML = document.getElementById("email").value    
        row.cells[2].innerHTML = document.getElementById("bday").value
        row = null;                                                       //Allows Records created to be updated within the table without creating an additional table row//
    }

    //DELETING A RECORD//

    function deleteRecord(td) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }