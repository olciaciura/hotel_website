import React, { useEffect, useState } from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";

function Layout() {

    const [jumpedToFooter, setJumpedToFooter] = useState(false)

    useEffect(() => {
        console.log(jumpedToFooter)
        if(jumpedToFooter) {
            const timer = setTimeout(() => {
                setJumpedToFooter(false);
            }, 1000);
            return () =>clearTimeout(timer);
        }
    }, [jumpedToFooter])

  return (
    <div className="App-page">
        <div id='header'>
            <div className="navbar-container">
                <div className="navbar-icon">
                    <Link to="/home">
                        <img className="logo" src='../../logo.png' alt='logo'/>
                    </Link>
                </div>
                <Navbar setJumpedToFooter={setJumpedToFooter} />
            </div>
        </div>
        <div id='app-body'>
            <Outlet />
            <Footer jumpedToFooter={jumpedToFooter}/>
        </div>
    </div>
  );
};

export default Layout;