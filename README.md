# Tracking_employees

## Description

This project is a command-line application bulit from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. Developers usually have to develop interfactes to allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**.

## table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Mock-Up](#Mock-Up)
- [License](#License)
- [Contribution](#Contributing)
- [Questions](#Questions)


## Installation
The following necessary dependencies must be installed to be able to run this application:


    * In your CL, run 'npm i inquirer@8.2.4' to install the Inquirer package --> (https://www.npmjs.com/package/inquirer/v/8.2.4).

    * In your CL, run 'npm i mysql2' to install the MySQL2 package so as to connect to a MySQL database --> (https://www.npmjs.com/package/mysql2).

    * In your CL, run 'npm i console.table' to install the console.table package so as to print MySQL rows to the console --> [console.table package](https://www.npmjs.com/package/console.table).


## Usage
A Database schema has been designed as shown in the following image:



This schema contains the following three tables:

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

## Mock-Up
The following video shows an example of the application being used from the command line:



[Tracking-employees.webm](https://user-images.githubusercontent.com/109991922/218636621-f4dd780e-4747-44d3-85ea-516eb9deb105.webm)




## License
This project is licensed under the MIT License. 


## Contributing
Contributors: Feel free to contribute to better improve this app creating a PR


## Questions
If you have any questions about the repo or the project usage, please open an issue or contact me!

GitHub: https://github.com/Angelajm6

Email: angelajaume.m@gmail.com
