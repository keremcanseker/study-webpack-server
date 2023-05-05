export class UI {
    constructor() {
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department")
        this.salaryInput = document.getElementById("salary");
        this.employeesList = document.getElementById("employees");
    }

    addAllEmployeesToUI(employees) {
        let result = "";
        employees.forEach(element => {
            result += `
                <tr>
                <td>${element.name}</td>
                <td>${element.department}</td>
                <td>${element.salary}</td>
                <td>${element.id}</td>
                <td><a href=# id="delete-employee" class="btn btn-danger">Remove</a></td>
                </tr>
            `
        });


        this.employeesList.innerHTML = result;
    }

    clearInputs() {
        this.nameInput.value = "";
        this.departmentInput.value = "";
        this.salaryInput.value = "";
    }

    addEmployeeToUI(employee) {
        this.employeesList.innerHTML += `
        <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href=# id="delete-employee" class="btn btn-danger">Remove</a></td>
        </tr>
    `

    }

    deleteEmployeeFromUI(element) {
        element.remove()
    }

}