import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
       <nav className="navbar bg-info container-fluid">
         <h1 className="text-danger-emphasis">The Blogger</h1>
        <div className="nav">
            <Link className="nav-link fs-5 text-danger-emphasis" to="/">Home</Link>
            <Link className="nav-link fs-5 text-danger-emphasis" to="/create">Create</Link>
        </div>
       
       </nav> 
     );
}
 
export default NavBar;