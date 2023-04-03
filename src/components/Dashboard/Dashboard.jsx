import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({token, onSetView}) => { 

  const logoutBtn = () => {
    token.clear();
    onSetView(0)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" onClick={logoutBtn} className="nav-link" href="#">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
