import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        A Propos
      </NavLink>
      
    </nav>
  );
};
export default Navbar;
