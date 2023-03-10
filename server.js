const inquirer = require('inquirer');
const db = require('./db/connection');
//const mysql2 = require('mysql2');
const express = require('express');
const connection = require('./db');
//const router = express.Router();


db.connect(async function (error) {
    if (error) {
        console.log(error)
        throw error
    }
    start();
})

function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ]
    )
        .then((answer) => {
            switch (answer.choice) {
                
                case 'View Employees':
                    
                    viewEmployees();
                    break;
                case 'View Roles':

                    viewRoles();
                    break;
                case 'View Departments':

                    viewDepartments();
                    break;
                case 'Add Employee':

                    newEmployee();
                    break;
                // case 'Add Role':

                //     addRole();

                // case 'Add Department':

                //     addDepartment();

                case 'Quit':

                    Quit();
                    break;
            }

        }

        )
}

function viewEmployees() {
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
      if (err) throw err;
      console.log("Viewing All Employees");
      console.table(res);
      inquirer.prompt([
          {
              type: 'list',
              name: 'choice',
              message: 'select an option.',
              choices: [
                  'Main Menu',
                  'Quit'
              ],
          }
      ])
      .then((answer) => {
          switch (answer.choice) {
              case 'Main Menu':
                  start();
                break;
                case 'Quit':
                    Quit();
          }
      })
    //   start();
    }) 
  };

function viewRoles() {
    let request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer)=>{
            switch (answer.choice) {
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                Quit();
            }
        })
        
    })
}
function viewDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option.',
                choices: [
                    'Main Menu',
                    'Quit'
                ]
            }
        ])
       .then((answer) => {
          switch (answer.choice){
               case 'Main Menu':
                  start();
                    break;
                    case 'Quit':
                       Quit();
           }
       })
    })
}

function newEmployee() {
    console.log('oy')
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter employee first name',
            name: 'FirstName'
        },
        {
            type: 'input',
            message: 'Enter employee last name',
            name: 'LastName'
        },
        {
            type: 'input',
            message: 'Enter role ID',
            name: 'RoleID'
        },
        {
            type: 'input',
            message: 'Enter thier managers ID',
            name: 'ManagerID'
        }
        
    ])
    .then(function (response) {
        db.query('INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)', 
        [response.FirstName, response.LastName, response.RoleID, response.ManagerID], function(err,res, fields) {
            if (err) throw err;
            console.log(fields);
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Main Menu',
                        'Quit'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Main Menu':
                       start();
                       break;
                       case 'Quit':
                           Quit();
               }
           })
        })
    })
}


function Quit() {
    console.log('Goodbye!');
    process.exit();
    
}


