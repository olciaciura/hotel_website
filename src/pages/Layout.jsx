import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function Layout() {
  return (
    <div className="App-page">
        <div id='header'>
            <div className="navbar-container">
                <div className="navbar-icon">
                    {/* tu ikonka? */}
                    IKONA
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