import food1 from "../image/food1.jpeg"
import { Scrollbars } from 'react-custom-scrollbars';
import { useContext } from "react";
import { CartContext } from "./Cart";

const Cart_item = ({id,name,description,image,price,quantity})=>{
       const {removeItem,increment,decrement} = useContext(CartContext)
            return(
                <>
                
                <div class="cart_item">
                <div class="product_img"><img src={image}></img></div>
                <div class="product_name">{name}</div>
                <div class="product_quantity">
                    <span><i class="fa fa-minus mx-2" onClick={()=>decrement(id)}></i></span>  <input type="number" placeholder={quantity}></input><span><i class="fa fa-plus mx-2" onClick={()=>increment(id)}></i></span>
                </div>
                <div class="product_price">{price} tk</div>
                <div class="delete_item btn"onClick={()=>removeItem(id)} >
                    <i class="fa fa-close" ></i>
                </div>
                 </div>
                 <hr/>
                 </>
            )
}

export default Cart_item
