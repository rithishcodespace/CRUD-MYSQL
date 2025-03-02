const mysql = require("mysql");
const db = mysql.createConnection({ //initialising mysql connection first 
    host:"localhost",
    user:"root",
    password:"Rithish@2006",
    database:"crud"
})

db.connect((error)=>{ //connnecting to database
    if(error) return console.error("Connecting of database failed",error);
    else console.log("successfully connected to database")
})

module.exports = db;
