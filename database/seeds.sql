USE employeetrackDB;

INSERT INTO department (name) VALUES ("Construction");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Warranty");
INSERT INTO department (name) VALUES ("Sales");

INSERT INTO role (title, salary, department_id) VALUES ("Project Manager", 70, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Assistant Project Manager", 35, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 55, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Technician", 45, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 100, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("John", "Blue", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jack", "Black", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Chris", "White", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jane", "Green", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jessica", "Brown", 5);