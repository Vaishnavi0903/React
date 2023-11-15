import { useState } from "react";

function Conditionalrendering() {

    const [loggedIn, setlogIn] = useState(false)

    // NOT RECOMMENDED TO USE THIS METHOD   
    /*if (loggedIn) {
        return (
            <div>
                <h1>Welcome Anil</h1>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>Welcome Guest</h1>
            </div>
        );
    }*/


    //  RECOMMENDED (ternary operator)
    return(
        <div>
           {/* {loggedIn?<h1>Welcome Anil</h1> : <h1>Welcome Guest</h1>} */ }    {/**if-else statement */}
          {loggedIn==1?<h1>Welcome U1</h1>:
          loggedIn==2?<h1>Welcome U2</h1>:
          <h1>Welcome U3</h1>}     {/**if-elseif-else statement */}

        </div>
    )



}
export default Conditionalrendering;