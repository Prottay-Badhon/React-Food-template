import{React,useState} from 'react';
import { BrowserRouter, Route, Link,NavLink, Switch,useParams} from "react-router-dom";
import Cart from './Cart';
function AddToCart(props) {

    const {id,name,price,quantity} = useParams();

    const [newquantity,setQuantity]=useState(quantity);
    const onChangeHandeler=(event)=>{
        const x = event.target.value;
            setQuantity(x)
    }
   

    return (
        <>
           <div class="p-5">
                <Cart></Cart>
           </div>
        </>
    );
}

export default AddToCart;