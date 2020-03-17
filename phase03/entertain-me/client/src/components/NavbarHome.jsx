import React from "react";
import { Link } from "react-router-dom";
import AddNew from './AddNew'


export default function NavbarHome() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/tv" className="nav-link">
                Tv
              </Link>
              {/* <span className="sr-only">(current)</span> */}
            </li>
          </ul>
        </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <AddNew/>
            </li>
        </ul>
    </div>
      </nav>
    </>
  );
}