import {useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

let Edit = () =>{
    const {id} = useParams();
    const navigate = useNavigate(); 
    const[name,setname] = useState("");
    const[emailId,setEmailId] = useState("");
    const[password,setpassword] = useState("");

    async function editData()
    {
        let data = {
            name:name,
            emailId:emailId,
            password:password
        }

        fetch(`http://localhost:3000/patchData/${id}`,{
            method:"PATCH",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        })
        .then((response)=>{
            if(response.ok)
            {
                navigate("/");
            }
            else{
                console.error("there is an in updating the student data");
            }
        })
    }


    return(
        <div>
            <div className="flex justify-center bg-gradient-to-t from-yellow-300 to-pink-500 h-screen">
            <div className="bg-white inline-block mt-44 h-72 p-12 rounded-2xl w-[500px]">
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter name" className="w-full border mb-2 rounded-md h-10"/> <br />
                <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} placeholder="Enter emailId" className="w-full border mb-2 rounded-md h-10"/><br />
                <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder="Enter password" className="w-full border mb-2 rounded-md h-10"/><br />
                <button className="bg-sky-400 rounded-md p-2 mt-8" onClick={()=>editData()}>update</button>
            </div>
        </div>
        </div>
    )
}

export default Edit;