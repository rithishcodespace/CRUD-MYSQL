import {useState,useEffect} from "react";

let Edit = () =>{
    
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
        <div>
            <div className="flex justify-center bg-gradient-to-t from-yellow-300 to-pink-500 h-screen">
            <div className="bg-white inline-block mt-44 h-80 p-12 rounded-2xl">
                <input type="text" value={needed}/>
                <input type="text" value={needed}/>
                <input type="text" value={needed}/>
                <button className="bg-sky-400 rounded-md p-2 mt-8" onClick={()=>navigate("/")}>update</button>
            </div>
        </div>
        </div>
    )
}

export default Edit;