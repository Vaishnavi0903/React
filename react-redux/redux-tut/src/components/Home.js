import React from "react";

function Home(props)
{
    //props are trasferred from HomeContainer.js to Home.js
    console.warn("props" , props)
    return (
        <div>
              <h1>Home Component</h1>
              <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://wholesale.alegre.net.au/assets/full/S-IPHX-ALL-NIB.jpg?20201026105128" alt="IphoneImg"/>
                </div>
                <div className="text-wrapper item">
                    <span>I-phone</span>
                    <span>Price : $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={()=>
                        props.addToCartHandler({price:1000 , name:'IPhone 11'})
                    }>
                    Add To Cart</button>
                </div>
              </div>
        </div>
    )
}

export default Home;
