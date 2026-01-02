import { useState,useEffect } from "react";
function Users(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        setUsers([
            {id:1, name: "ALI"},
            {id:2, name: "Yussef"}
        ]);
    }, []); 
    return <>
        <h1>Hello dans la page Users</h1>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </>
}

export default Users;