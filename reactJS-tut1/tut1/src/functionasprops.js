import React from "react";

function Functionasprops(props) {
    return (
        <div>
            <h1>Pass Function as Props</h1>
            <button onClick={() => props.data()}>call data function</button>
        </div>
    );
}

export default Functionasprops