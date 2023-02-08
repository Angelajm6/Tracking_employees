INSERT INTO department(id, department_name)
VALUES 
(1, 'Marketing'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal'),


INSERT INTO roles(id, title, salary, department_id)
VALUES
(1, 'Digital Marketing Agent', 100000, 1),
(1, 'Marketing Assistant', 80000, 1),
(2, 'Software Engineer', 130000, 2),
(3 'Account Manager', 150000, 3),
(4, 'Legal Team lead', 210000, 4), 
(2, 'Lead Engineer', 160000, 2),



INSERT INTO employees(id, first_name, last_name, roles_id, manager_id)
VALUES
(1, 'Helen', 'Spencer', '1', '1'),
(2, 'Kim', 'Brown', '2', Null),
(3, 'Bryant', 'Thompson', '3', '3'),
(4, 'Ashley', 'Allen', '4', '4'),
(5,'Mike', 'Sparrow', '5', Null),
(6, 'Angie', 'Chan','6', Null),



