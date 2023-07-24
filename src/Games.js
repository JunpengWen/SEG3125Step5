import { useState } from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import game1 from './game1.png';
import game2 from './game2.png';
import game3 from './game3.png';
import game4 from './game4.png';
import game5 from './game5.png';


const Games = () => {
    const [game, setGame] = useState('');

    const data = [
        { title: 'The Legend of Zelda: Breath of the Wild', id: 1 },
        { title: 'Super Mario World', id: 2 },
        { title: 'Portal 2', id: 3 },
        { title: 'Mass Effect 2', id: 4 },
        { title: 'Red Dead Redemption 2', id: 5 }
    ];

    const filter = (game, data) => {
        if (!game) {
            return data;
        }
        return data.filter(title => title.title.toLowerCase().includes(game.toLowerCase()));
    }

    const filteredGames = filter(game, data);

    return (
        <div className="games">
            <div className="mainGame">
                <br />
                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', fontSize: '2.5em' }}>Game</h1>
                <div className="searchBar">
                    <label htmlFor="">Search</label>
                    <input type="text" placeholder="Enter a Name" onChange={e => setGame(e.target.value)} />
                    {filteredGames.length > 0 && (
                        <div className="filteredGames">
                            <h2>Filtered Games:</h2>
                            <ul>
                                {filteredGames.map(game => (
                                    <li key={game.id}>
                                        <Link to={`/gameinfo/${game.id}`}>{game.title}</Link>
                                    </li>

                                ))}
                            </ul>
                        </div>
                    )}
                </div>


                <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>Recommend</h1>
                <hr />
                <div className='titleImage'>
                    <img src={game1} alt="img" />
                </div>
                <Link to="/gameinfo/1" style={{ marginLeft: '50px' }}>The Legend of Zelda: Breath of the Wild</Link>

                <div className='subImage'>
                    <img src={game2} style={{ marginLeft: '150px', marginRight: '50px' }} alt="img" />
                    <img src={game3} style={{ marginRight: '150px', marginLeft: '50px' }} alt="img" />
                </div>

                <div className="sublinks">
                    <Link to="/gameinfo/2">Super Mario World</Link>
                    <Link to="/gameinfo/3" style={{ marginLeft: '450px' }}>Portal 2</Link>
                </div>



                <div className='subImage'>
                    <img src={game4} style={{ marginLeft: '150px', marginRight: '50px' }} alt="img" />
                    <img src={game5} style={{ marginRight: '150px', marginLeft: '50px' }} alt="img" />
                </div>
                <div className="sublinks">
                    <Link to="/gameinfo/4">Mass Effect 2</Link>
                    <Link to="/gameinfo/5" style={{ marginLeft: '400px' }}>Red Dead Redemption 2</Link>
                </div>
                <br />
            </div>
            <Footer />
        </div>
    );
}

export default Games;
