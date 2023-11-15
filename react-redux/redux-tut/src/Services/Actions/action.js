import {ADD_TO_CART} from '../Constants'
export const addToCart = (data) => {
    //data is traferred from onclick function of button from Home.js to action.js
    //console.warn("action",data)
    return {
        type: ADD_TO_CART,
        data: data     //name,price of item 
    }
}


