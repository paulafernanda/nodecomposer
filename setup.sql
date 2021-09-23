
-- create the databases
CREATE DATABASE IF NOT EXISTS reloaddb;

-- create the users for each database
-- CREATE USER 'newuser'@'%' IDENTIFIED BY 'passsupersecret';
-- GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `awsomeproject`.* TO 'newuser'@'%';

FLUSH PRIVILEGES;