import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

let Read = () =>{
    const navigate = useNavigate();
    const [needed,setneeded] = useState(null);
    const {id} = useParams(); 
    useEffect(()=>{
        async function getData()
        {
            try{
                let data = await fetch("http://localhost:3000/getData");
                let json = await data.json();
                const foundStudent = json.find((student)=>student.student_id==Number(id))
                if(foundStudent)setneeded(foundStudent);
            }
            catch(error)
            {
                console.log("Error occured in fetch data",error);
            }
        }
        getData();
       },[id])
        
    return(
        <div className="flex justify-center bg-gradient-to-t from-yellow-300 to-pink-500 h-screen">
            {needed && <div className="bg-white inline-block mt-44 h-80 p-12 rounded-2xl">
                <p className="text-4xl">Student Details</p><br />
                <p>Name: {needed.name}</p><br />
                <p>EmailId: {needed.emailId}</p><br />
                <p>Password: {needed.password}</p>
                <button className="bg-sky-400 rounded-md p-2 mt-8" onClick={()=>navigate("/")}>back</button>
            </div>}
        </div>
    )
}

export default Read;