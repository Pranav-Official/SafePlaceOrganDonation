import logo from './MainLogo.png';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="60" height="65" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">About Us</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact Us</a>
          </li>
          <li className="navbar-item">
            <button className="log-but">Login</button>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar;