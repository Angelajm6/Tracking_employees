DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE department (
    id INT AUTO_INCREMENT,
    roles_id INT,
    department_name VARCHAR(29) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(29),
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(29) NOT NULL,
    last_name VARCHAR(29) NOT NULL,
    roles_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(manager_id),
    REFERENCES employees (id)
    ON DELETE SET NULL
);
