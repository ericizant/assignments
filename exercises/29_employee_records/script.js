// Exercise - Employee Records:

var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " + this.name + "\nJob Title: " + this.jobTitle + "\nSalary: " + this.salary + "\nStatus: " + this.status);
}

var bob = new Employee("Bob", "Manager", "$60,000");
var ben = new Employee("Ben", "Teacher", "$40,000");
var jacob = new Employee("Jacob", "Mentor", "$30,000", "Part Time");

jacob.status = "Part Time";

employees.push(bob, ben, jacob);
console.log(employees);