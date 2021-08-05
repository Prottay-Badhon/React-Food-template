import React, { useState ,useEffect } from 'react';
import "../css/Component-css/OrderComponent.css"
import { BrowserRouter, Route, Link,NavLink, Switch,useParams} from "react-router-dom";
import AddToCart from './AddToCart';
import MenuData from '../Json Data/MenuData';
import { cleanup } from '@testing-library/react';
const getLocalStorageItem =()=>{
    
    const item = localStorage.getItem("orderlists")
    if(item){
        return JSON.parse(item)
    }
    else
        return []

}


const OrderComponent=(props)=> {
   const {id,name,price,image}=useParams()

    const[totalCost,setTotalCost]=useState(null)

    const [cart,setCart]=useState(getLocalStorageItem);
    const [cartItem,setCartItem]=useState({
        foodName: name,
        price: price,
        quantity: "Full",
        number: 0,
        deleveryFee:10,
        
    });

    

    const onChangeHandeler=(event)=>{
        const value= event.target.value;
        setCartItem({
            ...cartItem,
          [ event.target.name]: value
        })
    }

    const formHandeler=(event)=>{
        event.preventDefault()
        setCart([...cart,cartItem])
      
    }

    useEffect(() => {
        localStorage.setItem("orderlists",JSON.stringify(cart),
        )
    }, [cart])

    //  useEffect(() => {
    //     const order = MenuData.filter((currElm)=>{
    //         return currElm.id === 2
            
    //      })
    //      setOrderList(order)
    //    console.log(orderList)  
    //  },[])
    const clearCart=()=>{
        setCart([]);
    }
    return (
        <>
            <div class="row px-5">
                <div class="col-lg-6">
                <div class="order_div  bg-light py-5 px-3">
                <h3>Feliciano</h3>
                <form onSubmit={formHandeler} id="order_form">
                <table class="table responsive">
                    <tr>
                        <td>Food Name</td>
                        <td>{cartItem.foodName}</td>

                    </tr>
                    <tr>
                    <td>Quantity</td>
                        <td>
                        <input type="radio" id="full" onChange={ onChangeHandeler } name="quantity" value="full"/>
                         <label for="full">FULL</label>
                        <input type="radio" id="half"  onChange={ onChangeHandeler } name="quantity" value="half"/>
                         <label for="half">HALF</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td><input type="number" name="number" class="number" onChange={onChangeHandeler}></input></td>
                    </tr>
                    <tr>
                        <td>single Cost</td>
                        <td> {cartItem.price}tk</td>
                    </tr>
                    <tr>
                        <td>Delevery Fee</td>
                        <td>{cartItem.deleveryFee} tk</td>
                    </tr>
                   
                   
                        
                   
                </table>
                    <button class="btn btn-success" type="submit">Add to cart</button>
                </form>
            </div>
                </div>
                <div class="col-lg-6 p-5">
                <div class="table  bg-light px-3 mt-5">
                    <button class="btn btn-danger" onClick={()=>clearCart()}>Clear Cart</button>
                <table class="responsive">
                    <tr>
                    <th>Food Name</th>
                    <th>Quantity</th>
                    <th>Single cost</th>
                    <th>Number</th>
                    <th>cost</th>
                    <th>Action</th>
                    </tr>

                   {
                       
                       cart.map((info,index)=>{

                           const {foodName,quantity,price,number}=info

                        return(
                            <tr>
                            <td>{foodName}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>{number}</td>
                            <td>{price*number}</td>

                            <td><button class="btn btn-danger">Delete</button></td>
    
                             </tr>
                        )
                       })
                   }
                </table>
                <p>Total Cost: {totalCost} tk</p>
                <button class="btn btn-info">Checkout</button>
            </div>
                </div>
            </div>
            
            
        </>
    );
}

export default OrderComponent;