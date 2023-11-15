import { NavLink , Link} from "react-router-dom";

function NavBar()
{
    return(
        <div>
            <ul className="navbar">
                <li><NavLink style={({isActive})=>{return {color: isActive? 'green':null}}}
                    className="navbar-link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return {color: isActive? 'green':null}}}
                    className="navbar-link" to="/about">AboutUs</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return {color: isActive? 'green':null}}}
                    className="navbar-link" to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink style={({isActive})=>{return {color: isActive? 'green':null}}}
                    className="navbar-link" to="/login">Login</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default NavBar;

//You cannot apply className to simple Link that's why we use NavLink