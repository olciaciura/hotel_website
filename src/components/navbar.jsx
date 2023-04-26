import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Agent</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;