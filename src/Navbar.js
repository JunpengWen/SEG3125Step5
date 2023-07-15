import logo from './logo.png';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} width={70} height={70}  alt="Logo" />
            <h1 style={{marginLeft: 10}}>GameWame</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/games">Games</a>
                <a href="/contact">Contact Us</a>
            </div>
        </nav>
        
     );
}
 
export default Navbar;