import React, {useRef, useState, useEffect} from "react";
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

        const [portrait, setPortrait] = useState(false);
        const overlayRef = useRef(null);

        const handleClick = () => {
                props.setPage(false)
                props.setJumpedToFooter(true)
        }

        const handleOverlayClick = (event) => {
            if (overlayRef.current.contains(event.target)){
                props.setPage(false)
            }
        }

        useEffect(() => {
            if (props.page) {
              document.addEventListener('click', handleOverlayClick);
            } else {
              document.removeEventListener('click', handleOverlayClick);
            }
        
            return () => {
              document.removeEventListener('click', handleOverlayClick);
            };
          }, [props.page]);

        window.matchMedia("(orientation: portrait)").addEventListener("change", e => {setPortrait(!portrait)});
        
            return (
                <nav>
                    { !portrait && 
                        <img className='menu' src={"../../menu.png"} onClick={() => {
                            props.setPage(true)
                        }}/>
                    }
                    { portrait && 
                            <ul>
                            {
                            linkToName_list.map((names, index) => (
                            <li key={index} >
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } to={linkToName_list[index][0]} id={linkToName_list[index][2]}>{linkToName_list[index][1]}</NavLink>
                            </li>))
                            }
                            <li>    
                            <a href="#footer" onClick={handleClick}>Kontakt</a>
                            </li>
                            </ul>
                    }
                    {props.page &&                             
                            
                            <div className="overlay" ref={overlayRef}>
                                <ul>
                            {
                            linkToName_list.map((names, index) => (
                            <li key={index} >
                                <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                                } to={linkToName_list[index][0]} id={linkToName_list[index][2]}>{linkToName_list[index][1]}</NavLink>
                            </li>))
                            }
                            <li>    
                                <a href="#footer" onClick={handleClick}>Kontakt</a>
                            </li>
                            </ul>
                            </div>
                    }
                </nav>
            );  
}

export default Navbar;