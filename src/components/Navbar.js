import {NavLink} from "react-router-dom"

function Navbar(){
    // Remove the dots?
    return(
        <div>
            <NavLink exact to="/">
                home
            </NavLink>
            <NavLink exact to="/about">
                about
            </NavLink>
            <NavLink exact to="/blogs">
                blogs
            </NavLink>
            <NavLink exact to="/resume">
                resume
            </NavLink>
            <NavLink exact to="/social">
                social
            </NavLink>
            {/* <NavLink exact to="/contact">
                contact me.
            </NavLink> */}
        </div>
    )
}

export default Navbar