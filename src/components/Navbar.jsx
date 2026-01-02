import { Link } from "react-router-dom";

function Navbar(){
    return <>
        <h1>React Dashboard Pro</h1>
        <nav>
            <Link to='/'>Dashboard</Link>
            <Link to='/users'>Users</Link>
        </nav>
    </>
}
export default Navbar;