import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Meet Friends</Link>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/discover">Discover</Link>
          </li>
          <li className="nav-item">
            <Link to="/add">Add</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
