import { Link } from "react-router-dom";

function Page404()
{
    return(
        <div>
            <h1>404 Page Not Found</h1>
            <p>This page is not found</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default Page404;