DROP DATABASE IF EXISTS business;
CREATE DATABASE business;

USE business;


CREATE TABLE department (
    id INT AUTO_INCREMENT,
    roles_id INT,
    department_name VARCHAR(29) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(29),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);


CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(29) NOT NULL,
    last_name VARCHAR(29) NOT NULL,
    roles_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(manager_id),
    REFERENCES employees (id)
);
