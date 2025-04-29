import { useState } from "react";

const Create = ()=>{


    let [user,setUser] = useState(
        {
            id : "",
            sname : "",
            email : "",
            password :""

        }
    )

    let handleinput = (e)=>{
        setUser((user)=>({
            ...user,[e.target.name]:e.target.value
        }))
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        let u1 = JSON.stringify(user)
      localStorage.setItem(u1,"user");
        
    }
   
    return(
        <>
           <form onSubmit={handleSubmit}>
                <label>Enter Id</label>
                <input type="tel" placeholder="Enter your ID" name = "id" onChange={handleinput}></input>
                <label>Enter Name</label>
                <input type="text" placeholder="Enter Your Name" name="sname" onChange={handleinput}></input>
                <label>Enter Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" onChange={handleinput}></input>
                <label>Enter Password</label>
                <input type="password" placeholder="Enter Your password" name="password" onChange={handleinput}></input>
                <button>Create</button>
           </form>
        </>
    )
}

export default Create;