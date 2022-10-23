/*eslint-env browser*/


var employees = [
    ["Tina", "CEO", 1234], 
    ["Patrick", "Sotware engineer", 2134], 
    ["Jose", "Sr. Developer", 9876], 
    ["Tannushree", "Developer", 4456], 
    ["Sneha", "Sr. Software Engineer", 9483]
];

var $ = function(id){
    return document.getElementById(id);
};

function buildEmployee(empl) {
    var tr = document.createElement("tr");
    var td = '<tr><td>' +empl[0]+ '</td><td>' +empl[1]+ '</td> <td>' +empl[2]+ '</td></tr>';
    tr.innerHTML = td;
    var deleteTd = tr.appendChild(document.createElement("td"));
    var del = deleteTd.appendChild(document.createElement("input"));
    del.type = "button";
    del.value = "Delete";
    del.innerText= empl;
    del.addEventListener("click", deleteEmployee);
    $("display_employee").appendChild(tr);
}

var displayEmployee = function () {
    var head = "<th>Name</th><th>Title</th><th>Extension</th><th></th>";
    $("display_employee").innerHTML = head;
    employees.forEach(buildEmployee);
    $("count").innerHTML = `${employees.length}`;
}

var deleteEmployee = function (empl) {
    var a = empl.target.parentNode.parentNode.children[0].innerText;
    var ind = employees.findIndex(employee => {
        if(employee[0] === a){
            return true;
        }
    });
    employees.splice(ind, 1);
    displayEmployee();
}

var addEmployee = function () {
    var flag = 1;
    var error = "Required";
    
    var name = $("name").value;
    var title = $("title").value;
    var ext = $("ext").value;
    
    if(name === "") {
        flag = 0;
        $("name_error").innerHTML = error;
    }
    if(title === "") {
        flag = 0;
        $("title_error").innerHTML = error;
    }
    if(ext === "") {
        flag = 0;
        $("ext_error").innerHTML = error;
    }

    if(flag === 1) {
        employees.push([name, title, parseInt(ext, 10)]);
        $("name_error").innerHTML = "";
        $("title_error").innerHTML = "";
        $("ext_error").innerHTML = "";
        $("employee").reset();
        displayEmployee();
    }
}

window.addEventListener("load", function() {
    $("add").addEventListener("click", addEmployee);
    displayEmployee();
});


