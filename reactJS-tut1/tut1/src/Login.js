import React, { useState } from "react";

function Login() {
    const [user,setuser]=useState("")
    const [pass,setpass] = useState("")
    const [usererr , setusererr] = useState(false)
    const [passerr , setpasserr] = useState(false)
    function LoginHandle(e)
    {
        //alert("hello")
        if(user.length<3 || pass.length<3)
        {
            alert("type correct values")
        }
        else{
            alert("all good")
        }
        e.preventDefault()
    }
    function userHandler(e)
    {
        let item = e.target.value
        if(item.length<3)
        {
            setusererr(true)
        }
        else
        {
            setusererr(false)
        }
        setuser(e.target.value)
    }
    function passHandler(e)
    {
        let item = e.target.value
        if(item.length<5)
        {
            setpasserr(true)
        }
        else
        {
            setpasserr(false)
        }
        setpass(e.target.value)
    }
    return (
        <div>
            <h1>LogIn</h1>
            <form onSubmit={LoginHandle}>
                <input type="text" placeholder="Enter user id" onChange={userHandler}></input>{usererr?<span>user not valid</span>:""}
                <br></br><br></br>
                <input type="password" placeholder="Enter user password" onChange={passHandler}></input>{passerr?<span>password not valid</span>:""}
                <br></br><br></br>
                <button type="Submit">LogIn</button>
            </form>
        </div>
    )
}

export default Login