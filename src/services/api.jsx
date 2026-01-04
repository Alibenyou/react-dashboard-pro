export const fetchUsers = async () =>{
    const reponse = await fetch("/src/data/users.json");
    return await reponse.json();
}