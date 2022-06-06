var employees = [];

function employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

employee.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", title: " + this.title + ", Salary: " + this.salary + ", Status: " + this.status);
}

var employee1 = new employee("kyle", "cashier", 50000);
var employee2 = new employee("Mike", "cook", 60000);
var employee3 = new employee("Jones", "web developer", 80000, "Part Time");

employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);