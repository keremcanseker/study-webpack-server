import { Request } from "./requests";


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
request.put(1, { name: "ahmet", department: "advertise", salary: 2000 })
    .then(data => console.log(data))
    .catch(err => console.log(err));


