import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import FicheLogement from '../src/pages/FicheLogement';
import About from '../src/pages/About';
import ErrorPage from '../src/pages/ErrorPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '../src/index.css';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche/:title" element={<FicheLogement />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


