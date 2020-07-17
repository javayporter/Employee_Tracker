var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Almena#2004",
  database: "employee_trackerDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer 
  .prompt({
  name: "action",
  type: "List",
  message: "Select an option.",
  options: [
    "ADD DEPARTMENT",
    "VIEW DEPARTMENT",
    "ADD ROLE",
    "VIEW ROLE",
    "ADD EMPLOYEE",
    "VIEW EMPLOYEE",
    "UPDATE ROLE",
    "END"
  ]
})
    .then(function(answer) {
      // based on their answer, call the appropriate funtions to peform the chosen action.
      if (answer.action === "ADD DEPARTMENT") {
        addDepartment();
      }
      else if(answer.action === "VIEW DEPARTMENT") {
        viewDepartment();
      }
      else if(action.action === "ADD ROLE") {
        addRole();
      } 
      else if(answer.action === "VIEW ROLE") {
        viewRole();
      }
      else if(answer.action === "ADD EMPLOYEE") {
        addEmployee();
      }
      else if(answer.action === "VIEW EMPLOYEE") {
        viewEmployee();
      }
      else { 
        connection.end();
      }
    });

    // function to handle adding a role
    function addRole() {
      inquirer.prompt([
          {
              type: "input",
              name: "title",
              message: "Enter Title: ",
          }, {
              type: "number",
              name: "salary",
              message: "Enter Salary: ",
          }, {
              type: "number",
              name: "departmentId",
              message: "Enter Depaertment ID: ",
          }
      ]).then(function (response) {
          connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.departmentId], function (err, results) {
              console.table(results);
          })
          start();
      })
  
  }

    // function to handle adding an employee 
    function addEmployee() {
      inquirer.prompt([{
              type: "input",
              name: "firstName",
              message: "Enter employee first name. "
          },
          {
              type: "input",
              name: "lastName",
              message: "Enter employee last name. "
          },
          {
              type: "number",
              name: "roleId",
              message: "Enter role ID. "
          },
          {
              type: "number",
              name: "managerId",
              message: "Enter manager ID. "
          }
      ]).then(function(res) {
          connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, results) {
              if (err) throw err;
              console.table(results);
              start();
          })
      })
  } 
    
    // function to handle adding a department
    function addDepartment() {
      inquirer.prompt([{
          type: "input",
          name: "department",
          message: "Enter Department Name: "
      }, ]).then(function(res) {
          connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, results) {
              if (err) throw err;
              console.table(results);
              start();
          })
      })
  }

    // function to handle viewing roles
    function viewRole() {
      connection.query("SELECT * FROM role", function(err, results) {
        if (err) throw (err);
        console.table(results);
        start();
      });
    }   
    
    // function to handle viewing employees
    function viewEmployee() {
      connection.query("SELECT * FROM employees", function(err, results) {
        if (err) throw err;
        console.table(results);
        start();
      })
    } 

    // function to handle viewing departments
    function viewDepartment() {
      connection.query("SELECT * FROM departments", function(err, results) {
        if (err) throw err;
        console.table(results);
        start();
      });


      
}};
    
