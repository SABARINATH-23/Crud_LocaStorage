import { useEffect, useRef } from "react";

const Home = ()=>{

    let arr = [];
    for(let i = 1;i<=localStorage.length;i++)
    {
        arr.push(localStorage.getItem(i));
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
                    </tr>
                </thead>
                <tbody>
                     {
                       
                       
                
                     }   
                </tbody>
            </table>
        </div>
    )
}
export default Home;