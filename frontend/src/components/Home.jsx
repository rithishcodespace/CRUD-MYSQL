import { useEffect,useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";

let Home = () =>{
    const [studentData,setStudentData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    function handleDelete(id)
    {
      fetch(`http://localhost:3000/deleteData/${id}`,{ // fetch is an async operation after it returns promise the .then will be called
        method:"DELETE",
        headers: { "Content-Type": "application/json" }
      }).then((response)=>{
        if(response.ok)
        {
            let filterdata = studentData.filter((data)=>data.student_id!=id);
            setStudentData(filterdata);
        }
        else
        {
            console.log("failed to delete the student")
        }
      })
    }

    useEffect(()=>{
        async function getdata()
        {
          let data = await fetch("http://localhost:3000/getData");
          let json = await data.json();
          setStudentData(json);
        }
        getdata();
    },[]
    );

    useEffect(()=>{
       async function getdata()
        {
          let data = await fetch("http://localhost:3000/getData");
          let json = await data.json();
          setStudentData(json);
        }
        getdata(); 
    },[location])

    return(
        <div className="bg-gradient-to-r from-purple-600 to-green-400 h-screen">
            <center>
                {studentData.length!=0 && <div className="bg-white inline-block rounded-xl mt-32 overflow-y-hidden relative">
                    <Link to={"/create"}><button className="absolute right-8 bg-green-500 mt-1.5 p-1 rounded-md">Create +</button></Link>
                   <table className="border-separate border-spacing-8">
                    <thead>
                        <tr>
                            <th>STUDENT_ID</th>
                            <th>NAME</th>
                            <th>EMAIL ID</th>
                            <th>PASSWORD</th>
                        </tr>
                    </thead>
                            <tbody>
                                {studentData.map((studentData,index)=>{
                                return(
                                    <tr key={index}>
                                        <td className="bg-slate-300 rounded-md p-1">{studentData.student_id}</td>
                                        <td className="bg-slate-300 rounded-md p-1">{studentData.name}</td>
                                        <td className="bg-slate-300 rounded-md p-1">{studentData.emailId}</td>
                                        <td className="bg-slate-300 rounded-md p-1">{studentData.password}</td>
                                        <td className="bg-red-600 rounded-md p-1"><button><Link to={`/read/${studentData.student_id}`}>Read</Link></button></td>
                                        <td className="bg-cyan-500 rounded-md p-1"><button><Link to={`/edit/${studentData.student_id}`}>Edit</Link></button></td>
                                        <td className="bg-blue-600 rounded-md p-1"><button onClick={()=>handleDelete(studentData.student_id)}>Delete</button></td>
                                    </tr>  
                                )
                                })}
                        </tbody>
                   </table>
                </div>}
           </center>
        </div>
    )
}

export default Home;