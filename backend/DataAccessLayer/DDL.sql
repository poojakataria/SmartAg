CREATE DATABASE smartDB;
USE smartDB;
CREATE TABLE User(
	ID int PRIMARY KEY AUTO_INCREMENT,
    fullName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(128) NOT NULL,
    salt VARCHAR(10) NOT NULL,
    userType VARCHAR(10) NOT NULL
);

INSERT INTO User (fullName,email,password,salt,userType) VALUES ('Prathamesh Patki','prathamesh.patki@outlook.com','4672354503e7c750f194d22bc85d80f3006c1ea580c550c979a8ce9ab4752bdb5cbc0739486ecb6297914f4e74704c2399098effdac9cf7ec8950abe860de3f6','LmAIjNE1HD','Admin');
INSERT INTO User (fullName,email,password,salt,userType) VALUES ('Akshay Bajaj','akshay.bajaj@sjsu.edu','fa27cf7b2174bb665f35a1225aa697b4921c437c3d477a3facd647e2964b0587de39abe66aa9d8cdb9441095c52c821c723bf1a8638f714c81dafa36cb57a198','CZMauJ5lf1','Farmer');
INSERT INTO User (fullName,email,password,salt,userType) VALUES ('Pooja Kataria','pooja.kataria@sjsu.edu','7731b54ede9e5e6b911edf68719a99241e2107d384c2bd1894a4fbdfdf3b290c13b36b12c24822cb609c621d0c9737d6e8c675f4d891c3227d64fba402dd795f','enCwMcXvAG','Service');
INSERT INTO User (fullName,email,password,salt,userType) VALUES ('Shivang Mistry','shivang.mistry@sjsu.edu','29027a226e46b1a89e29eeda79eb79ae43cc81585f98e91ee94beb01e8525376d537945e2dec002be486e1715c3ad1f8516c8ff19f788856e1fc2c5b2c534f6b','rrVJ6wPed3','Farmer');

CREATE TABLE Sensor (
	ID int PRIMARY KEY AUTO_INCREMENT,
    sensorType VARCHAR(50) NOT NULL,
    price double NOT NULL
);

INSERT INTO Sensor(sensorType, price) VALUES('Luminosity Sensor', 10.99);
INSERT INTO Sensor(sensorType, price) VALUES('Proximity Sensor', 5.99);

CREATE TABLE EdgeStation(
	ID INT PRIMARY KEY AUTO_INCREMENT,
    stationType VARCHAR(25) NOT NULL,
    price DOUBLE NOT NULL
);

INSERT INTO EdgeStation (stationType,price) VALUES('Motion Controller', 100.00);
INSERT INTO EdgeStation (stationType,price) VALUES('Actuator', 49.99);

CREATE TABLE ServiceRequest (
	ID INT PRIMARY KEY AUTO_INCREMENT,
    user INT NOT NULL,
    requestType VARCHAR(25) NOT NULL,
    machine VARCHAR(25) NOT NULL,
    status INT NOT NULL,
    dueDate DATE NOT NULL,
    FOREIGN KEY (user) REFERENCES User(ID) 
);

INSERT INTO ServiceRequest (user,requestType,machine,status,dueDate) VALUES (2,'Install','Harvester',0,'2019-11-25');
INSERT INTO ServiceRequest (user,requestType,machine,status,dueDate) VALUES (4,'Install','Tractor',0,'2019-11-26');

CREATE TABLE ServiceItem(
	ID INT PRIMARY KEY AUTO_INCREMENT,
    orderID INT NOT NULL,
    edgeStation INT NOT NULL,
    sensor INT NOT NULL,
    FOREIGN KEY (orderID) REFERENCES ServiceRequest(ID),
    FOREIGN KEY (sensor) REFERENCES Sensor(ID)
);

INSERT INTO ServiceItem (orderID,edgeStation,sensor) VALUES (1,1,2);
INSERT INTO ServiceItem (orderID,edgeStation,sensor) VALUES (1,2,1);
INSERT INTO ServiceItem (orderID,edgeStation,sensor) VALUES (1,2,2);
INSERT INTO ServiceItem (orderID,edgeStation,sensor) VALUES (2,1,2);
INSERT INTO ServiceItem (orderID,edgeStation,sensor) VALUES (2,1,1);
INSERT INTO ServiceItem (orderID,edgeStation,sensor) VALUES (2,2,2);