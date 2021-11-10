import LOGOCOZED from './Assets/STICKERS COZED-01.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Gallery" element={<Gallery />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
