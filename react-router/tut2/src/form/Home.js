import { Link , useNavigate , useLocation} from "react-router-dom";
import NavBar from "./NavBar";

//useNavigate is a React Router Hook

function Home() {

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location)

    const navToPage = () =>
    {
        navigate('/contact')
    }

    return (
        <>
            <NavBar/>
            <h1>Home Page</h1>
            <h3>Hello friends ...Welcome to our Web-app!!</h3>
            <h3> To know more about us <Link to="/about"> Go to About Us </Link> link </h3>
            <br/>
            <button onClick={()=>navigate('/about')}>Go to About Page</button>
            <br/>
            <button onClick={()=>navToPage() }>Go to Contact Page</button>
        </>
    )
}

export default Home;