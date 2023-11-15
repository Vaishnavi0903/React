import { ADD_TO_CART } from "../Constants"

const initialState = {
    cartData : []      //name,price of items
}

export default function cartItems(state=initialState , action)
{
    //In 'action' parameter of function the data is transfered : type and data

    switch(action.type)
    {
        case ADD_TO_CART :
            //console.warn("reducer" , action)
            return{
                ...state,
                cartData:action.data
            }
            break;
        default:
            return state;
    }
}