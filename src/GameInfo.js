import Footer from './Footer';
import game1 from './game1.png';
import RatingSection from './RatingSection';
import CommentSection from './CommentSection';
import { Link } from 'react-router-dom';

const GameInfo = () => {
    return (
        <div className="gameinfo">
            <div className="main">
                <br></br>
                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', fontSize: '2.5em' }}>The Legend of Zelda: Breath of the Wild</h1>
                <div className='titleImage'>
                    <img src={game1} alt="img" />
                </div>
                <p>
                    "The Legend of Zelda: Breath of the Wild" is an action-adventure video game developed and published by Nintendo.
                    It was released in March 2017 and is part of the iconic "The Legend of Zelda" series. The game is available on Nintendo Switch and Wii U platforms.
                </p>

                <p>In "Breath of the Wild," players take on the role of Link, the protagonist, who awakens from a long slumber to find t
                    he kingdom of Hyrule in a state of ruin. The land is engulfed in darkness, and the ancient evil known as Calamity Ganon
                    threatens to destroy the world. Link embarks on a quest to stop Ganon's resurrection and save Princess Zelda and the
                    kingdom of Hyrule.
                </p>
                <Link to="/checkout"  style={{ display: 'flex', justifyContent: 'center',textDecoration: 'none'}}>
                    <button style={{fontSize: '1.5em'}}>Buy Now</button></Link>
                
                <RatingSection />
                <CommentSection />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default GameInfo;