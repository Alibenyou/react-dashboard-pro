import { useState,useEffect } from "react";
function Users(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erreur, setErreur] = useState(null);
    
    useEffect(()=>{
        const fetchUsers = async () =>{
            try{
                setLoading(true);
                const response = await fetch("/users.json")
                if(!response.ok){
                    throw new Error("Erreur reseau")
                }
                const data = await response.json();

                setUsers(data);
            }catch(err){
                setErreur(err.message)
            }
            finally{
                setLoading(false)
            }
            
        }
        fetchUsers();
    }, []);
    if(loading) return <p>Chargemant en cours...</p>
    if(erreur) return <p>{erreur}</p>
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