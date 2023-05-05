import { Request } from "./requests";


const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department")
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
// request.get().then(employees => console.log(employees)).catch(err => console.log(err))


request.post({ name: "ali", department: "management", salary: 5000 })
    .then(data => console.log(data))
    .catch(err => console.log(err));