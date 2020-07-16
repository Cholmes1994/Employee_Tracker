// Require inquirer to prompt user
const inquirer = require("inquirer");

// Require mySQL to connect to DB
const mysql = require("mysql");

// Require console.table to print the table to console
const consTable = require("console.table");

// Establish the connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "#Wert54321",
    database: "employeetrack_db"
})

// Connect to the mysql server
connection.connect(function (err) {
    if (err) throw err;
    // Call the start function
    start();
})

// Initial prompt given to the user using inquirer
function start() {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "Choose an option ",
        choices: [
            "View employees",
            "View departments",
            "View roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee role",
            "Exit"
        ]
    })
        .then(function (answer) {
            if (answer.menu === "View employees") {
                viewEmployees();
            } else if (answer.menu === 'View departments') {
                viewDepartments();
            } else if (answer.menu === "View roles") {
                viewRoles();
            } else if (answer.menu === "Add employee") {
                addEmployee();
            } else if (answer.menu === "Add department") {
                addDepartment();
            } else if (answer.menu === "Add role") {
                addRole();
            } else if (answer.menu === "Update employee role") {
                updateRole();
            }
            else if (answer.menu === "Exit") {
                connection.end();
            }
        })
}

// Functions that enact each prompt selection

// View employees
function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    });
}

// View departments
function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    });
}

// View roles
function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    });
}


// Add new department
function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "newDepartment",
        message: "Enter new department name: ",
    })
        .then(function (answer) {
            connection.query("INSERT INTO department SET ?",
                {
                    name: answer.newDepartment
                },
                function (err, answer) {
                    if (err) {
                        throw err;
                    }
                }
            ),
                console.log("Sucess! You added a department.");
            start();
        });
}

// Add new role
function addRole() {
    inquirer
      .prompt([
        {
          name: "addedRole",
          type: "input",
          message: "Enter new role: "
        },
        {
          name: "salary",
          type: "input",
          message: "Enter yearly salary for this role: "
        },
        {
          name: "deptId",
          type: "input",
          message: "What is the department ID? "
        }
      ])
      .then(function (answer) {
        connection.query("INSERT INTO role SET ?",
          {
            title: answer.addedRole,
            salary: answer.salary,
            department_id: answer.deptId
          },
          function (err) {
            if (err) {
              throw err;
            }
          }
        ),
        console.log("Success! You added a new role.")
        start();
      });
  }
