var empTbody = document.getElementById("empTbody");

initTable();

function addEmployee()
{
  let employees = localStorage.getItem("employees");

  if(employees == null) 
    employees = [];
  else 
    employees = JSON.parse(employees);

  let count = parseInt(localStorage.getItem("idcount"));
  if(isNaN(count))
  {
    count = 1;
  }

  let name = document.getElementById("empName").value;
  let age = document.getElementById("empAge").value;
  let sal = document.getElementById("empSal").value;

  employees.push({"id" : count, "name" : name, "age" : age, "sal" : sal});

  count++;
  localStorage.setItem("idcount", count);
  localStorage.setItem("employees", JSON.stringify(employees));

  initTable();
}

function editEmployee()
{
  let employees = localStorage.getItem("employees");

  if(employees == null) 
    employees = [];
  else 
    employees = JSON.parse(employees);

  let id = document.getElementById("empEditID").value;
  let name = document.getElementById("empEditName").value;
  let age = document.getElementById("empEditAge").value;
  let sal = document.getElementById("empEditSal").value;

  employees.forEach
  (
    function(emp, index)
    {
      if(emp.id == id)
      {
        emp.name = name;
        emp.age = age;
        emp.sal = sal;

        employees[index] = emp;
      }
    }
  )

  localStorage.setItem("employees", JSON.stringify(employees));

  initTable();
}

function deleteEmployee(id)
{
  let employees = localStorage.getItem("employees");

  if(employees == null) 
    employees = [];
  else 
    employees = JSON.parse(employees);

  employees.forEach
  (
    function(emp, index)
    {
      if(emp.id == id)
      {
        employees.splice(index, 1);
      }
    }
  )

  localStorage.setItem("employees", JSON.stringify(employees));

  initTable();
}

function initTable()
{
  let employees = localStorage.getItem("employees");

  if(employees == null) 
    employees = [];
  else 
    employees = JSON.parse(employees);

  empTbody.innerHTML = "";

  let html = "";

  employees.forEach
  (
    function(emp)
    {
      html += "<tr>" +
              "<td>" + emp.id + "</td>" +
              "<td>" + emp.name + "</td>" +
              "<td>" + emp.age + "</td>" +
              "<td>" + emp.sal + "</td>" +
              "<td><button onclick=\"deleteEmployee('" + emp.id + "')\">Delete</button></td>" +
              "</tr>";
    }
  )

  empTbody.innerHTML = html;
}