import { NavLink, useNavigate } from "react-router-dom";

const Home = ()=>{
    let Navigate = useNavigate();
    let arr = [];
   
    if(localStorage.length != 0)
    {
        for(let i = 1;i<=localStorage.length;i++)
            {
                let value = localStorage.getItem(i);
                arr.push(JSON.parse(value))
            }
    }
    else
    {
        return(
        <>
            <p>please Insert an Data </p>
        </>)
    }
   
    let handleDelete = (del)=>{
       
        localStorage.removeItem(del);
        Navigate("/")
    }

    
    return(
        <div>
            <table border={"2px"}>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                     {
                       
                       arr.map((ele,index)=>{
                        return(
                        <tr key={index}>
                            <td>{ele.id}</td>
                            <td>{ele.sname}</td>
                            <td>{ele.email}</td>
                            <td>{ele.password}</td>
                            <td>
                            <NavLink to={`/update/${ele.id}`}><button>Update</button></NavLink> 
                                <button onClick={()=>handleDelete(ele.id)}>Delete</button>
                            </td>
                        </tr>
                       )})
                
                     }   
                </tbody>
            </table>
        </div>
    )
}
export default Home;