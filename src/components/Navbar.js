import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <div>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/about">
                About
            </NavLink>
            <NavLink exact to="/projects">
                Projects
            </NavLink>
            <NavLink exact to="/blogs">
                Blog
            </NavLink>
            <NavLink exact to="/resume">
                Resume
            </NavLink>
            <NavLink exact to="/social">
                Social
            </NavLink>
            <NavLink exact to="/contact">
                Contact Me
            </NavLink>
        </div>
    )
}

export default Navbar