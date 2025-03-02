const express = require("express");
const cors = require("cors");
const PORT = 3000;
const studentRoute = require("./Routes/studentRoute");

const app = express() //creating the instance of express

app.use(cors());
app.use(express.json())
app.use("/",studentRoute);
app.listen(PORT,()=>console.log(`server successfully running on localhost:${PORT}`))
