import React, { useContext,useReducer } from 'react';
import MenuData from "../Json Data/MenuData"
import Cart_item from './Cart_item';
import { CartContext } from './Cart';


const ContextCart=(props)=>{
        
        
    const {item ,clearCart} = useContext(CartContext)
    return (
        <>
            <div class="cart">

                <div class="cart_container bg-light">
                    {
                        item.map((product)=>{
                            return(
                                <Cart_item key={product.id} {...product}/>
                                
                            ) 
                            

                        })
                    }
                    
                
                   <div class="ml-5">
                     <button class="btn btn-success">Checkout</button>
                     <button class="btn btn-danger" onClick={clearCart}>Clear cart</button>
                   </div>
                </div>

            </div>
        </>
    );
}

export default ContextCart;