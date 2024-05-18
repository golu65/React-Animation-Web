import './App.css';
import Home from './Home/Home';
import Header from './Headers/Header.js'
import FirstHome from './Home/FirstHome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Two from './Home/Two';

import Footer from './Headers/Footer';
import Six from './Home/Six';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<FirstHome />} />
          <Route path='/celebrities' element={<Two />} />
          <Route path='/booking' element={<Six />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
