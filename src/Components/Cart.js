import React,{createContext,useReducer} from 'react';
import { reducer } from './reducer';

import "../css/Component-css/Cart.css"
import Cart_item from './Cart_item';
import MenuData from "../Json Data/MenuData"
import { Scrollbars } from 'react-custom-scrollbars';
import ContextCart from './ContextCart';
export const CartContext = createContext();

const initialState={
    item:MenuData,
    totalamount:0,
    totalItem:0
};



const Cart=(props)=> {
   const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id
        })
    }
    const clearCart=()=>{
        return dispatch({
            type:"CLEAR_CART"
        })
    }
    const increment=(id)=>{
        return dispatch({
            type:"INCREMENT",
            payload:id
        })
    }
    const decrement=(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <CartContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
              <ContextCart/>
            </CartContext.Provider>
        
        </>
    );
}

export default Cart;