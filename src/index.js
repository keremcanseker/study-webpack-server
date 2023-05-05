import { Request } from "./requests";
import { UI } from "./ui";

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department")
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");

// GET REQUEST

// request.get().then(employees => console.log(employees)).catch(err => console.log(err))

// POST REQUEST
// request.post({ name: "ali", department: "management", salary: 5000 })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//PUT REQUEST

// request.put(1, { name: "ahmet", department: "advertise", salary: 2000 })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// DELETE REQUEST

// request.delete(2)
//     .then(message => console.log(message))
//     .catch(err => console.log(err));

const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee)
}

function getAllEmployees() {
    request.get()
        .then(data => {
            ui.addAllEmployeesToUI(data);
        })
        .catch(err => console.log(err));
}

function addEmployee(e) {
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === "" || employeeDepartment === "" || employeeSalary === "") {
        alert("please fill everything");
    } else {
        request.post({ name: employeeName, department: employeeDepartment, salary: Number.employeeSalary })
            .then(employee => {
                ui.addEmployeeToUI(employee)
            }).catch(err => console.log(err));
    }

    ui.clearInputs();
    e.preventDefault();
}