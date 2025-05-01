import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
const Update = ()=>{
    let {id}  = useParams();
    let obj_len =  JSON.parse(localStorage.getItem(id));
    let Navigate  = useNavigate();
    let [state,setState] = useState(
        {
            id  : obj_len.id,   
            sname : obj_len.sname,
            email : obj_len.email,
            password : obj_len.password
        }
    );
    let handleInput = (e)=>{
        setState((state)=>({
            ...state,[e.target.name]:e.target.value
        }))
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem(state.id,JSON.stringify(state));
        Navigate("/")

    }
    return(
        <>
          <form onSubmit={handleSubmit}>
                <label htmlFor='id'>ID</label>
                <input type='tel' name = "id"  id="id" value={id} readOnly></input>
                <label htmlFor='sname'>Name</label>
                <input type='text' name='sname' id='sname' value={state.sname} onChange={handleInput}></input>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' value={state.email} onChange={handleInput}></input>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' value={state.password} onChange={handleInput}></input>
                <button>Update</button>
          </form>
           
        </>
    )
}
export default Update;