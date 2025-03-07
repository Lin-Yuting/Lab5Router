import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/Home">Home</Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/Login">Login</NavLink>
            <NavLink className="nav-item nav-link" to="/Perfil">Perfil</NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <NavLink className="nav-item nav-link" to="/Dashboard">Dashboard</NavLink>
          </ul>
        </div>
      </nav>
      
      <footer className="text-center py-3 bg-secondary text-white">
        <p>© 2025 Lin</p>
      </footer>
    </>
  );
};

