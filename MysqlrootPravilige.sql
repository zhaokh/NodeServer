ALTER USER 'root'@'localhost' IDENTIFIED BY '12345' PASSWORD EXPIRE NEVER;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345'; 
FLUSH PRIVILEGES;