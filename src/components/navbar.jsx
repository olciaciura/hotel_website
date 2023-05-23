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
                ['/home', 'Home', null], 
                ['/oferta', 'Oferta', null],
                ['/cennik', 'Cennik', null],
                ['/przydatne_informacje', 'Przydatne informacje', null],
                ['/galeria', 'Galeria', null],
                ['/okolica', 'Okolica', null]
        ]

//   useEffect(() => {
//         const url = window.location.pathname
//         for (let elem in linkToName_list){
//                 if(linkToName_list[elem][0] == url){
//                         linkToName_list[elem][2] = 'actual'
//                 }
//         }
//         console.log(linkToName_list)
//   }, []);


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