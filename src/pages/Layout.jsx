import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="App-page">
        <div id='header'>
            <div className="navbar-container">
                <div className="navbar-icon">
                    <Link to="/home">
                        <img className="logo" src='../../logo.png' alt='logo'/>
                    </Link>
                </div>
                <Navbar />
            </div>
        </div>
        <div id='app-body'>
            <Outlet />
            <Footer />
        </div>
    </div>
  );
};

export default Layout;