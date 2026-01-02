import { useState } from "react";
function Users(){
    const [users, setUsers] = useState([]);
    return <>
     <ul>
        <li>Ali</li>
        <li>Yussef</li>
        <li>Abbas</li>
        <li>Acheikh</li>
        <li>Abakar</li>
     </ul>
    </>
}

export default Users;