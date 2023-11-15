import React from "react";

function Header(props) {
    //props are trasferred from HomeContainer.js to Home.js
    console.warn("header", props.data)
   // console.warn("cart-count", props.data.length)  
   // --> It is undefined as we haven't written the function to update it
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count"> {props.data.length} </span>
                <img src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg" alt="cartImage" />
            </div>
        </div>
    )
}

export default Header;
