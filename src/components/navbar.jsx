import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/o_mnie">O mnie</Link>
        </li>
        <li>
          <Link to="/oferta">Oferta</Link>
        </li>
        <li>
          <Link to="/cennik">Cennik</Link>
        </li>
        <li>
          <Link to="/przydatne_informacje">Przydatne informacje</Link>
        </li>
        <li>
          <Link to="/galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/okolica">Okolica</Link>
        </li>
        <a href="#footer"> <button>Kontakt</button> </a>
      </ul>
    </nav>
  );
}

export default Navbar;