import { useState } from "react";
import IMG from './IMG.png';

const Games = () => {

    const filter = (game, data) => {
        if (!game) {
            return data;
        }
        return data.filter(title => title.includes(game))
    }
    const [game, setGame] = useState('');

    const { data } = [{ title: 'A game', id: 1 }, { title: 'B game', id: 2 }, { title: 'C game', id: 3 }];

    const result = filter(game, data);
    return (
        <div className="games">
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Games</h1>
            <label htmlFor="">Search</label>
            <input type="text" placeholder="Enter a Name" onChange={e => setGame(e.target.value)} />
            
            <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px'}}>Recommend</h1>
            <div className='titleImage'>
          <img src={IMG} alt="img" />
        </div>
        <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
        </div>
    );


}

export default Games;