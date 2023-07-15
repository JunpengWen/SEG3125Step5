import Contact from './Contact';
import Games from './Games';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route exact path ="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
