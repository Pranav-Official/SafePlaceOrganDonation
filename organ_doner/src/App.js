import logo from './MainLogo.png';
import hero_doc from './hero-Doc.png';
import './App.css';
import './Login.js';

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

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Tranforms <span id='hope'>Hope</span> </h1>
        <h1 className="hero-heading">in to Reality</h1>
        <p className="hero-paragraph">
        Join the future of giving today and become the hero in someone’s story. 
        Blockchain-powered organ donation makes giving the ultimate gift easy and secure.        </p>
        <div className="hero-buttons">
          <button className="login-button">Login</button>
          <button className="how-it-works-button">How It Works</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero_doc} className="hero-png" alt="Image" />
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
