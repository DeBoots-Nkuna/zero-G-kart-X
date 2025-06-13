import kartLogo from '../assets/g-kart-logo-transparent.png'

export const Header = () => {
  return (
    <header className="header-container">
      <div className="container">
        <h1 className="title">
          <img
            className="main-logo"
            src={kartLogo}
            alt="Go-Kart logo with character in yellow suit with red helmat sitting inside a red kart with black wheels and yellow rims"
          />
        </h1>
        <nav>
          <ul className="nav-container">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Reach Out</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
