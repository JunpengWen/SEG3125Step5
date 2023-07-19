import { Link } from 'react-router-dom';
import logo from './logo.png';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} width={70} height={70}  alt="Logo" />
            <h1 style={{marginLeft: 10}}>GameWame</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/games">Games</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
        
     );
}
 
export default Navbar;