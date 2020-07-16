// Require inquirer to prompt user
const inquirer = require("inquirer");

// Require mySQL to connect to DB
const mysql = require("mysql");

// Require console.table to print the table to console
const console = require("console.table");

// Establish the connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "#Wert54321",
    database: "employeetrack_db"
});

// Connect to the mysql server
connection.connect(function (err) {
    if (err) throw err;
    // Call the start function
    start();
});

// Initial prompt given to the user
function start() {
    inquirer.prompt({
        name: "menu",
        type: "list",
        message: "What would you like to do? ",
        choices: [
          "View all employees",
          "View all departments",
          "View all roles",
          "Add new department",
          "Add new role",
          "Update employee role",
          "Exit"
        ]
      })
    
    
    };