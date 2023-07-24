import Button from 'react-bootstrap/Button';
import update1 from './update1.png'
import update2 from './update2.png'
import update3 from './update3.png'
import release1 from './release1.png'
import release2 from './release2.png'
import release3 from './release3.png'
import review1 from './review1.png'
import review2 from './review2.png'
import review3 from './review3.png'
import Footer from './Footer';


function Home() {
  const buttonStyle = {
    flex: '2',
    width: '66.66%',
    height: '50px',
    marginTop: '50px',
    marginBottom: '10px',
    fontSize: '18px',
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    backgroundColor: '#F18F01',
    color: '#ffffff'
  };
  return (
    <div className='homecontent'>
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '80px', marginRight: '80px' }}>
        <Button href="#update" style={buttonStyle}>Update</Button >
        <Button href="#release" style={buttonStyle}>Release</Button >
        <Button href="#review" style={buttonStyle}>Review</Button >
      </div>

      <section id="update">
        <br></br>
        <br></br>
        <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontSize: '2.5em' }}>Update</h1>
        <hr></hr>
        <div className='titleImage'>
          <img src={update1} alt="img" />
        </div>
        <h2 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>Epic Games Store Update</h2>
        <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '160px', marginRight: '160px' }}>The Epic Games store experienced great success in April,
          with notable achievements such as World War Z selling over 320,000 copies and Satisfactory becoming Coffee Stain's best PC launch.
          Anno 1800 and Metro: Exodus also had impressive PC launches. The store's roadmap shifted due to development priorities,
          and the partnership with Humble Bundle is thriving. The free game initiative has resulted in over 25 million installations.
          Epic Games expresses gratitude for the support received.</p>
        <br></br>
        <div className='subImage'>
          <img src={update2} style={{ marginRight: '150px' }} alt="img" />
          <p>The April Update for Generation Zero brings significant improvements and bug fixes to enhance the gameplay experience.
            Changes include fixes to combat mechanics, machine behavior, and XP systems. New emotes and a stamina bar have been added,
            while audio and visual enhancements have been implemented. The update also addresses crashes and resolves various issues
            related to enemies, environments, equipment, missions, multiplayer, UI, and more. Players are encouraged to provide feedback
            for further improvements.</p>

        </div>
        <br></br>
        <div className='subImage'>
          <p>Krafton Inc. and Tencent Games have released the 2.6 update for PUBG Mobile, introducing a dinosaur-themed experience.
            Primal Zones appear on the Erangel map, featuring hostile Pterosaurs and Velociraptors that can be tamed and ridden.
            The update also expands the World of Wonder creative mode, introduces a multiplayer platformer racing template, and offers
            new content and rewards in Cycle 4 Season 12. The full patch notes can be found on the official website.</p>
          <img src={update3} style={{ marginLeft: '150px' }} alt="img" />
        </div>


      </section>


      <section id="release">
        <br style={{ marginTop: '50px' }}></br>
        <br></br>
        <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontSize: '2.5em' }}>Release</h1>
        <hr />
        <div className='titleImage'>
          <img src={release1} alt="img" />
        </div>
        <h2 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>Game release dates 2023</h2>
        <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '160px', marginRight: '160px' }}>The ONer give a comprehensive list of game
          release dates for 2023, including titles for PC, PS5, Xbox, and Nintendo Switch. It mentions notable games like The Legend of
          Zelda: Tears of the Kingdom and provides updates on release dates and any associated previews or videos.</p>
        <br></br>
        <div className='subImage'>
          <img src={release2} style={{ marginRight: '150px' }} alt="img" />
          <p>The April Update for Generation Zero brings significant improvements and bug fixes to enhance the gameplay experience.
            Changes include fixes to combat mechanics, machine behavior, and XP systems. New emotes and a stamina bar have been added,
            while audio and visual enhancements have been implemented. The update also addresses crashes and resolves various issues
            related to enemies, environments, equipment, missions, multiplayer, UI, and more. Players are encouraged to provide feedback
            for further improvements.</p>

        </div>
        <br></br>
        <div className='subImage'>
          <p>Krafton Inc. and Tencent Games have released the 2.6 update for PUBG Mobile, introducing a dinosaur-themed experience.
            Primal Zones appear on the Erangel map, featuring hostile Pterosaurs and Velociraptors that can be tamed and ridden.
            The update also expands the World of Wonder creative mode, introduces a multiplayer platformer racing template, and offers
            new content and rewards in Cycle 4 Season 12. The full patch notes can be found on the official website.</p>
          <img src={release3} style={{ marginLeft: '150px' }} alt="img" />
        </div>
      </section>

      <section id="review">
        <br style={{ marginTop: '50px' }}></br>
        <br></br>
        <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontSize: '2.5em' }}>Review</h1>
        <hr />
        <div className='titleImage'>
          <img src={review1} alt="img" />
        </div>
        <h2 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>The 100 greatest video games of all time</h2>
        <p style={{ display: 'flex', justifyContent: 'center', marginLeft: '160px', marginRight: '160px' }}>GQ took a different approach to
          creating a list of the greatest games of all time. Instead of relying on a predetermined ranking by journalists, they invited a
          diverse group of industry professionals and enthusiasts to submit their personal top ten lists. A total of 239 final lists were
          received from 300 participants, resulting in 652 different games receiving votes. The list includes a mix of well-known classics,
          surprising newcomers like Disco Elysium, and the absence of popular franchises like Assassin's Creed. The winner not only received
          the most votes but also ranked as many people's number one choice. The full list represents various stories and features games
          from different genres, studios, and eras.</p>
        <br></br>
        <div className='subImage'>
          <img src={review2} style={{ marginRight: '150px' }} alt="img" />
          <p>During the gamescom 2021 Xbox Stream, Humble Games revealed that a selection of indie games will be available on Xbox Game
            Pass on their release day. The lineup includes titles such as Archvale, Bushiden, Chinatown Detective Agency, Dodgeball
            Academia, Flynn: Son of Crimson, Midnight Fight Express, Next Space Rebels, Signalis, Unpacking, and Unsighted. Xbox Game
            Pass continues to expand its content, catering to various types of gamers and offering a wide range of games. This announcement
            , along with the introduction of Xbox Cloud Based Gaming, is expected to be the start of more Game Pass announcements during
            Gamescom.</p>

        </div>
        <br></br>
        <div className='subImage'>
          <p>
            The best PS4 games include The Last of Us Part II, God of War, Red Dead Redemption 2, Persona 5, Bloodborne, Horizon Zero Dawn,
            Uncharted 4, Spider-Man, The Witcher 3, and Overwatch. These titles offer immersive stories, stunning visuals, and engaging gameplay
            across various genres, defining the console generation.</p>
          <img src={review3} style={{ marginLeft: '150px' }} alt="img" />
        </div>
      </section>
      <Footer/>

    </div>
  );
}

export default Home;