# README.md
## About
A course registration website created using the MERN stack. Instructions will be wrote by members of the FCFS group.

(README is currently updated by group's manager, Vi Huynh)

## Instruction
Start by downloading everything in package.json
```npm install```

To start the server using devStart 
```npm run devStart``` 

Note: devStart will automatically load changes without having to restart node everything. (Refresh page to see changes)

## Copyright
Must obtain permission from @Notorious to use code for commercial usage.


## BackEnd
Please start by reading up on node.js and MySQL intergration
https://www.w3schools.com/nodejs/nodejs_mysql.asp
Please copy this EXACTLY in order to connect to the aws MySQL database

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "fcfs.c2oe7fkglsr2.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "529dh-bj345-wbedaj"
});


