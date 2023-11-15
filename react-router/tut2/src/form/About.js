import { Link ,useLocation} from "react-router-dom";
import NavBar from "./NavBar";

function About() {

    return (
        <>
            <NavBar/>
            <h1>About Us Page</h1>
            <h3> <Link to="/">Go to Home Page</Link> </h3>  <br/>
            <Link to="/user/Anil" > Anil </Link> <br/>
            <Link to="/user/Peter"> Peter </Link>
        </>
    )
}

export default About;