import Footer from './Footer';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notfound">
            <div className='main'>
            <br/>
                <h1 style={{ fontSize: '2.5em' }}>404 Not Found</h1>
                <h2>Sorry, the page you are looking for does not exist.</h2>
                <Link to='/' style={{ fontSize: '20px' }}>Click me to back to the Homepage</Link>
            </div>
            <br/>
            <Footer />
        </div>

    );
}

export default NotFound;