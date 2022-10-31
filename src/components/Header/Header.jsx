import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import '../../index.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Logo />
        
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          <li>A Propos</li>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
