import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/games"style={{marginLeft: '80px'}}>Games</Link>
                <Link to="/contact" style={{marginLeft: '80px'}}>Contact Us</Link>
            </div>
            <br />
            <h4>Email: contact@gamewave.com &emsp; Phone: +1 (555) 123-4567</h4>

            <p>© 2023 GameWave. All rights reserved.
                This statement indicates that GameWave holds the copyright for all content and materials on the website
                and that unauthorized use or reproduction of any content is prohibited. Remember to replace "2023" with the current year
                and ensure that it accurately reflects the year the website is launched or updated.</p>

        </div>
    );
}

export default Footer;