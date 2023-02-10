USE business;

INSERT INTO department(department_name)
VALUES 
('Marketing'),
('Engineering'),
('Finance'),
('Legal');


INSERT INTO roles(title, salary, department_id)
VALUES
('Digital Marketing Agent', 100000, 1),
('Marketing Assistant', 80000, 1),
('Software Engineer', 130000, 2),
('Account Manager', 150000, 3),
('Legal Team lead', 210000, 4), 
('Lead Engineer', 160000, 2);



INSERT INTO employees(first_name, last_name, roles_id, manager_id)
VALUES
('Helen', 'Spencer', 1, Null),
('Kim', 'Brown', 2, Null),
('Bryant', 'Thompson', 3, 1),
('Ashley', 'Allen', 4, 2),
('Mike', 'Sparrow', 5, Null),
('Angie', 'Chan',6, Null);



