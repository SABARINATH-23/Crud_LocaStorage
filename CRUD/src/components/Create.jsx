import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = ()=>{


    let [user,setUser] = useState(
        {
            id : "",
            sname : "",
            email : "",
            password :""
        }
    )
    let arr = [];
    let navigate =  useNavigate();
    let handleinput = (e)=>{
        setUser((user)=>({
            ...user,[e.target.name]:e.target.value
        }))
       
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem(user.id,JSON.stringify(user));
        navigate("/")
    }
   
    return(
        <>
           <form onSubmit={handleSubmit} >
                <label htmlFor="id">Enter Id</label>
                <input type="tel" placeholder="Enter your ID" name = "id" onChange={handleinput} id="id"></input>
                <label htmlFor="sname">Enter Name</label>
                <input type="text" placeholder="Enter Your Name" name="sname" onChange={handleinput} id="sname"></input>
                <label htmlFor="email">Enter Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" onChange={handleinput} id="email" autoComplete="off"></input>
                <label htmlFor="password">Enter Password</label>
                <input type="password" placeholder="Enter Your password" name="password" onChange={handleinput} id="password"></input>
                <button>Create</button>
           </form>
        </>
    )
}

export default Create;