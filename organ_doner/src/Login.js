function LoginPage() {
    return (
      <section className="Login">
        <div className="Login-Left">
            <img src="" className="login-logo" alt="Image" />
          <h1 className="Login-heading">Tranforms <span id='hope'>Hope</span> </h1>
          <h1 className="Login-heading">in to Reality</h1>
          <p className="Login-paragraph">
          Join the future of giving today and become the hero in someone’s story. 
          Blockchain-powered organ donation makes giving the ultimate gift easy and secure.        </p>
          <div className="hero-buttons">
            <button className="login-button">Login</button>
            <button className="how-it-works-button">How It Works</button>
          </div>
        </div>
        <div className="Login-Right">
          <div><MiniNav /></div>
          
        </div>
      </section>
    );
  }

function MiniNav() {
    return (
        <nav className="mini-navbar">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#">Donor Login</a>
            </li>
            <li className="navbar-item">
              <a href="#">Donor Sign Up</a>
            </li>
            <li className="navbar-item">
            <a href="#">Hospital Login</a>
            </li>
          </ul>
        </nav>
      );
}

export default LoginPage;