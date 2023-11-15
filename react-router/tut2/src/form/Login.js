import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect } from "react";

function Login() {

    const navigate = useNavigate();

    function login() {
        localStorage.setItem('login', true)
        navigate('/')
    }
    useEffect(() => {
        let login = localStorage.getItem('login')
        if (login) {
            navigate('/')
        }
    })
    return (

        <div>
            <NavBar />
            <h1> Log In </h1>
            <input type="text" /><br />
            <input type="text" /><br />
            <button onClick={login}>LogIn</button>
        </div>
    );

}

export default Login;