const Sequelize = require ('sequelize');
var mysql = require ("mysql");
var sequelize;


require('dotenv').config();




   var connection = mysql.createConnection({
     process.env.JAWSDB_URL ||{
     host: "localhost",
     port:  3001,
     user: "root",
     }
   }) 

   if (process.env.JAWSDB_URL){
    sequelize = Sequelize(process.env.JAWSDB_URL); 
   }else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      port: 3001,
      user: "root",
      dialect: 'mysql'
   });}



module.exports = sequelize;
