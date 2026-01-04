import { useEffect, useState } from "react";

function Product(){
    const [produit,setProduit] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
     const fetchProducts = async () =>{
        try{
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve,1500));
            const data = 
            [
                {id: 1, name:"Telephone"},
                {id: 2, name:"Ordinateur"},
                {id: 3, name:"Casque"}
            ];
            setProduit(data);
        }catch(err){
            setError("Erreur lors du chargement de la page");
        }finally{
            setLoading(false);
        }
      } 
      fetchProducts();
      },
    []);
    if(loading) return <p>Chargement...</p>
    if(error) return <p>{error}</p>
    return <>
        <p>La liste des produits</p>
      <ul>
        {produit.map((produit) =>(
            <li key={produit.id}>{produit.name}</li>
        ))}
      </ul>
    
    </>
}
export default Product;