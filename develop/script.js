// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

    const employees = [];

    function addEmployee() {
      const firstName = prompt("Enter the First name: ");
      const lastName = prompt("Enter the Last name: ");
      const salary = parseInt(prompt("Enter the Salary"));

      employees.push(
        //Employee Object
        {firstName, lastName, salary}
      );

      let decision = confirm("Want to add another Employee?");

      if (decision == true) {
        //add emplopyee
        addEmployee();
      } else {
        //Return employee
        return employees;
      }
      return employees;
    }

    addEmployee();

    return employees;
    
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // Runs a for loop grabbing salary of each employee index at i
  let total = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    total = total + employeesArray[i].salary;
  }
  console.log(`The average salary of the employees is: ${( total / employeesArray.length )}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

  console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName}! You have won the lucky drawing!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);