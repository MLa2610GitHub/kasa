import logo from '../../assets/logo.png';
import '../../index.scss';

const Logo = () => {
  return (
    <div className="logoDiv">
      <img className="logo" src={logo} alt="logo Kasa" />
    </div>
  );
};

export default Logo;
