import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

let Create = () =>{
    const Navigate = useNavigate();
    const[name,setname] = useState("");
    const[emailId,setEmailId] = useState("");
    const[password,setpassword] = useState("");

    let handleSubmit = () =>{
        if(name.trim()!="" && emailId.trim()!="" && password.trim()!="")
        {
            let studentData = {
                "name":name,
                "emailId":emailId,
                "password":password
            }
            setname("");
            setEmailId("");
            setpassword("");
            fetch("http://localhost:3000/postData",{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(studentData) //converts js object into json
            })
        }
        Navigate("/");
        
    }

    return(
        <div className="bg-gradient-to-b from-red-500 to-lime-400  h-screen relative flex justify-center">
                <div className="flex flex-wrap flex-col rounded-md absolute bg-white w-[600px] p-2 top-32">
                    <p className="text-3xl">Add student</p><br />
                    <input type="text" required placeholder=" Enter Name" className="p-2 border border-black rounded-md mb-2" onChange={(e)=>setname(e.target.value)} value={name}/>
                    <input type="text" required placeholder=" Enter Email" className="p-2 border border-black rounded-md mb-2" onChange={(e)=>setEmailId(e.target.value)} value={emailId}/>
                    <input type="text" required placeholder=" Enter Password" className="p-2 border border-black rounded-md mb-2" onChange={(e)=>setpassword(e.target.value)} value={password}/>
                    <button className="bg-green-500 ronded-md p-2 mt-2.5" onClick={handleSubmit}>Submit</button>
                </div>
        </div>
    )
}

export default Create;