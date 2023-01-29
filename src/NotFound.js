import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h3>404</h3>
            <h3>PAGE NOT FOUND</h3>
            <Link to='/'>click to go to the home page</Link>
        </div>
     );
}
 
export default NotFound;
