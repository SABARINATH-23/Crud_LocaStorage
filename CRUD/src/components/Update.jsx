import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
const Update = ()=>{
    let {id}  = useParams();
    let obj_len =  JSON.parse(localStorage.getItem(id));

    let [state,setState] = useState(
        {
            sname : "",
            email : "",
            password : ""
        }
    );
    let handleInput = (e)=>{
        setState((state)=>({
            ...state,[e.target.name]:e.target.value
        }))
    }
    console.log(state)
    return(
        <>
          <form>
                <label htmlFor='id'>ID</label>
                <input type='tel' name = "id"  id="id" value={id} readOnly></input>
                <label htmlFor='sname'>Name</label>
                <input type='text' name='sname' id='sname' value={obj_len.sname} onChange={handleInput}></input>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' value={obj_len.email} onChange={handleInput}></input>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' value={obj_len.password} onChange={handleInput}></input>
          </form>
           
        </>
    )
}
export default Update;