import React from 'react';
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";

import food1 from '../image/food1.jpeg'
import food2 from '../image/food2.jpeg'
import food3 from '../image/food3.jpeg'
import food4 from '../image/food4.jpeg'
import food5 from '../image/food5.jpeg'
import MenuData from "../Json Data/MenuData"
import '../css/Component-css/MenuSection.css'
function MenuSection(props) {
    return (
        <>
            <div class='menuSection bg-white text-center'>
                <div class='container'>
                <div class='row first_row'>
                {
                    MenuData.map((menu,index)=>{
                        const {id,image,description,name,price} =menu
                        return(
                            <div class='col-lg-6 col-md-6  '>
                                <div class='row'>
                                        <div class='col-lg-6 p-1'>
                                             <div class='imgDiv2'>
                                             <img src={image} class='img-fluid'/>
                                          </div>
                                        </div>
                                        <div class='col-lg-6'>
                                        <div class='contentDiv'>
                                                <h4>{name}</h4>
                                                 <div class='dolar'>Cost: {price} tk</div>

                                                    <p>{description}</p>
                                                    <Link to={"/order/"+id+"/"+name+"/"+price}> <button class='btn'>Order now</button></Link>
                                       </div>
                                         </div>
                                </div>
                                
                             </div>
                        )
                    })
                }
                    
                </div>           
                </div>

                

            </div>
        </>
    );
}

export default MenuSection;