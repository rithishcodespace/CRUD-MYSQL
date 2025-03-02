const express = require("express");
const studentRoute = express.Router();
const db = require("../database/mysql")

studentRoute.get("/getData",(req,res)=>{
    try{
       db.query("select * from student",(error,result)=>{
          if(error) return res.json({message:"error occured in db",error});
          else res.send(result);
       })
    }
    catch(error)
    {
      res.status(404).send("ERROR :" + error);
    }
})

studentRoute.post("/postData",(req,res)=>{
   try
   {
      const {name,emailId,password} = req.body;
      let sql = "insert into student(name,emailId,password) values(?,?,?)"; // for parameterised queries we have use [] in any place eiter while destructuring or sending
      let values = [name,emailId,password]  // parameterised queries
      db.query(sql,values,(error,result)=>{
         if(error) res.status(500).json({ message: "Error occurred in post call", error });
         else res.send("student details added successfully")
      })
   }
   catch(error)
   {
      res.send(error);
   }
})

studentRoute.delete("/deleteData/:id",(req,res)=>{
  try{
    let id = req.params.id;
    let sql = "delete from student where student_id=?"
    db.query(sql,[id],(error,result)=>{
       if(error)console.error("an error occured in deleting student from db",error);
       else res.send("student deleted successfully!");
    })
  }
  catch(error)
  {
    res.status(404).send(error);
  }
})

studentRoute.patch("/patchData/:id",(req,res)=>{
   try{
      let id = [req.params.id];
      let sql = "alter table student "
   }
   catch(error)
   {
      res.status(404).send(error);
   }
})

module.exports = studentRoute;