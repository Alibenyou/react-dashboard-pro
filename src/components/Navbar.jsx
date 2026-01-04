import { Link } from "react-router-dom";

function Navbar(){
    return <>
    <header>
        <h1>React Dashboard Pro</h1>
        <nav>
            <Link to='/'>Dashboard</Link>
            <Link to='/users'>Users</Link>
            <Link to='/products'>Produit</Link>
        </nav>
    </header>
        
    </>
}
export default Navbar;