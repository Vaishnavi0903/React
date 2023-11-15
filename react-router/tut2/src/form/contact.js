import { Link , Outlet , useLocation} from 'react-router-dom';
import NavBar from './NavBar';


function Contact() {

    const location = useLocation();
    console.log(location)

    return (
        <>
            <NavBar />
            <h1> Contact Us Page </h1>
            <h3>Here we have some other buiseness</h3>\
            <br/>
            <h3> <Link to="company" state={{name :"anil siddhu"}}>Go to Company page</Link> </h3>  
            <h3> <Link to="channel">Go to Channel Page</Link> </h3>  
            <Outlet/>
            

        </>
    );
}

export default Contact;