import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Smart Shop Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="link">
        <span>Cart: 2</span>
      </Link>
    </header>
  );
};
