
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Logements from '../pages/Logements';
import FicheLogement from '../pages/FicheLogement';
import SharedLayout from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../../src/index.scss'


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logements" element={<Logements />} />
          <Route path="logements/:logementId" element={<FicheLogement />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;