USE employeetrack_db;

INSERT INTO department (name) VALUES ("Construction");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Warranty");
INSERT INTO department (name) VALUES ("Sales");

INSERT INTO role (title, salary, department_id) VALUES ("Technician", 45, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Analyst", 50, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 75, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Superintendent", 70, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 100, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("John", "Blue", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Chris", "Black", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jack", "Brown", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Paul", "White", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Nick", "Green", 5);