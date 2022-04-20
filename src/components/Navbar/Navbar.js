import React from "react";
import "./Navbar.scss";

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
            <a>Inicio</a>
          </li>
          <li className="nav-item">
            <a>Nosotros</a>
          </li>
          <li className="nav-item">
            <a>Buscar</a>
          </li>
          <li className="nav-item">
            <a>Contacto</a>
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
