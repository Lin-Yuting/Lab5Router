import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Layout = () => {
    return ( 
    <div>
        <nav>
            <NavBar>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Login">Login</NavLink></li>
                <li><NavLink to="/Perfil">Perfil</NavLink></li>
                <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
            </NavBar>
        </nav>
        <hr/>
        <Outlet/>
    </div>
    )
}
