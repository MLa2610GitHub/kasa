import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Logements from '../pages/Logements';
import FicheLogement from '../pages/FicheLogement';
import SharedLayout from '../components/Navbar/Navbar';
import '../../src/index.scss'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logements" element={<Logements />} />
          <Route path="logements/:logementId" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;