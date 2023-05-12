import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
{/*         <li>
                <Link to="/home#about_me"> <button>O&nbsp;mnie</button> </Link>    
                
        </li> */}
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
        <li>    
                <a href="#footer"> <button>Kontakt</button> </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;