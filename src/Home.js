import Button from 'react-bootstrap/Button';
import IMG from './IMG.png';
import subIMG from './subIMG.png';

function Home() {
  const buttonStyle = {
    flex: '2',
    width: '66.66%',
    height: '50px',
    marginTop: '50px',
    marginBottom: '50px',
    fontSize: '18px',
    border: '1px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  };
  return (
    
    <div className='homecontent'>
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '80px', marginRight: '80px' }}>
        <Button href="#update" style={buttonStyle}>Update</Button >
        <Button href="#release" style={buttonStyle}>Release</Button >
        <Button href="#review" style={buttonStyle}>Review</Button >
      </div>

      <section id="update">
        <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>Update</h1>
        <div className='titleImage'>
          <img src={IMG} alt="img" />
        </div>
        <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
        <div className='subImage'>
          <img src={subIMG} style={{ marginRight: '150px' }} alt="img" />
          <img src={subIMG} style={{ marginLeft: '150px' }} alt="img" />
        </div>

      </section>


      <section id="release">
        <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>Release</h1>
        <div className='titleImage'>
          <img src={IMG} alt="img" />
        </div>
        <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
        <div className='subImage'>
          <img src={subIMG} style={{ marginRight: '150px' }} alt="img" />
          <img src={subIMG} style={{ marginLeft: '150px' }} alt="img" />
        </div>
      </section>

      <section id="review">
        <h1 style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>Review</h1>
        <div className='titleImage'>
          <img src={IMG} alt="img" />
        </div>
        <h3 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
        <div className='subImage'>
          <img src={subIMG} style={{ marginRight: '150px' }} alt="img" />
          <img src={subIMG} style={{ marginLeft: '150px' }} alt="img" />
        </div>
      </section>


    </div>
  );
}

export default Home;