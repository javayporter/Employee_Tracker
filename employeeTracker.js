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
    "VIEW EMPLOYEE"
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

    //function to handle viewing departments
    function viewDepartment() {
      connection.query("SELECT * FROM departments", function(err, results) {
        if (err) throw err;
        console.table(results);
      });
}};
    
