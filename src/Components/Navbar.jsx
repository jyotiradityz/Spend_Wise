import './Navbar.css'; 
import prof from '../Images/cash.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/" className="navbar__link">Home</a>
        <a href="/about" className="navbar__link">About</a>
        <a href="/contact" className="navbar__link">Contact Us</a>
      </div>
      <div className="navbar__right">
        <img src={prof} className='img'></img>
        <a href="/profile" className="navbar__link">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
