import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menuStyles = {
    transform: "translateY(-100%)",
  };
  const [styles, setStyles] = React.useState(menuStyles);
  function handleClick() {
    setStyles((state) => {
      if (state.transform === "translateY(-100%)") {
        return {
          ...state,
          transform: "translateY(0)",
        };
      } else {
        return {
          ...state,
          transform: "translateY(-100%)",
        };
      }
    });
  }
  return (
    <header className="navbar">
      <a href="#" className="navbar-logo">
        MisPartituras
      </a>
      <nav className="nav-list" style={styles}>
        <ul>
          <li className="nav-item">
            <Link to="/mispartituras" onClick={handleClick}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nosotros" onClick={handleClick}>
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buscar" onClick={handleClick}>
              Buscar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" onClick={handleClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="burger-button" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
