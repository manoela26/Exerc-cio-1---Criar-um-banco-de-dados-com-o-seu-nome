ALTERAR :

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    port: 3307,
    database : 'Manoela'
});

 connection.connect();
console.log("conectado")
 
  
 let query = "update usuario set senha = 891027 where codigo = 6;";
 connection.query(query, function(error, results, fields){
    console.log("Alteraçoes realizadas ");

 })
 connection.end();

CONSULTAR:

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    port: 3307,
    database : 'Manoela'
});

 connection.connect();
console.log("conectado")
 
  
 let query = "Select * from usuario";
 connection.query(query, function(error, results, fields){
    console.log(results);
    console.table(results);
 })
 connection.end();

DELETAR :



const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    port: 3307,
    database : 'Manoela'
});

 connection.connect();
console.log("conectado")
 
  
 let query = "delete from usuario where login = 'julio123' ";
 connection.query(query, function(error, results, fields){
    console.log(results);
    console.table(results);
 })
 connection.end();

CADASTRAR:



const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password:'',
    port: 3307,
    database : 'Manoela'
});

 connection.connect();
console.log("conectado")
 
  
 let query = "insert into usuario (login, senha) values('julio123', 123456)";
 connection.query(query, function(error, results, fields){
    console.log(results);
    console.table(results);
 })
 connection.end();

