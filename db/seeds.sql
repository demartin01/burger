
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(30),
	devoured BOOLEAN,
	PRIMARY KEY (id)
);
 
USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
            VALUES  ("cheese burger", false);

INSERT INTO burgers (burger_name, devoured)
            VALUES  ("angus burger", false);

INSERT INTO burgers (burger_name, devoured)
            VALUES  ("regular burger", false);

SELECT * FROM burgers;
