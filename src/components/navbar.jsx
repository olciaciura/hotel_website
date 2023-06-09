import React, {useEffect} from "react";
import { Link, NavLink} from "react-router-dom";

function Navbar(props) {

        const linkToName = {
                '/home': 'Home',
                '/oferta': 'Oferta',
                '/cennik': 'Cennik',
                '/przydatne_informacje': 'Przydatne informacje',
                '/galeria': 'Galeria',
                '/okolica': 'Okolica'
            }

            var linkToName_list = [
                ['/', 'Home', null], 
                ['/oferta', 'Oferta', null],
                ['/cennik', 'Cennik', null],
                ['/przydatne_informacje', 'Przydatne informacje', null],
                ['/regulamin', `Nasza umowa`, null],
                ['/galeria', 'Galeria', null]
        ]

        const handleClick = () => {
                props.setJumpedToFooter(true)
        }

  return (
    <nav>
      <ul>
        {
                linkToName_list.map((names, index) => (
                <li key={index} >
                        <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  } to={linkToName_list[index][0]} id={linkToName_list[index][2]}>{linkToName_list[index][1]}</NavLink>
                </li>
                ))
        }
        <li>    
                <a href="#footer" onClick={handleClick}>Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;