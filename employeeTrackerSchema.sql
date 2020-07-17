DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_tracker;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);

INSERT INTO department (dept_name) VALUES("Admin");
INSERT INTO department (dept_name) VALUES("Customer Success");
INSERT INTO department (dept_name) VALUES("Sales");
INSERT INTO department (dept_name) VALUES("Product & Engineering");
INSERT INTO department (dept_name) VALUES("Marketing");

INSERT INTO role (title, salary, department_id) VALUES("Front Desk Lead", 40000, 1);
INSERT INTO role (title, salary, department_id) VALUES("Tech Support Specialist", 55000, 2);
INSERT INTO role (title, salary, department_id) VALUES("Account Executive", 70000, 3);
INSERT INTO role (title, salary, department_id) VALUES("Software Developer", 105000, 4);
INSERT INTO role (title, salary, department_id) VALUES("Marketing Representative", 65000, 5);


INSERT INTO employee (first_name, last_name, role_id) VALUES ("Carson", "Milot", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Andrew", "Gutowski", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Dominic", "Jeudy", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Javay", "Porter", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jeremy", "Marketing", 5);
