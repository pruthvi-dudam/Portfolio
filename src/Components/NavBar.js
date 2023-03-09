import React from 'react'
import avatar from '../Images/profile1.jpeg';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <div className="NavBar">
            <nav className="nav">
                <ul className="nav-items">
                    <div className="profile">
                        <img src={avatar} alt=""/>
                    </div>
                    <li className="nav-item">
                        <NavLink to = "/" exact activeClassName="avtive">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/about" exact activeClassName="avtive">
                            About me
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/projects" exact activeClassName="avtive">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = "/contact" exact activeClassName="avtive">
                            My Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        
                    </p>
            </footer>
            </nav>
        </div>
    )
}

 export default NavBar
