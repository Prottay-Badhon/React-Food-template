import userEvent from '@testing-library/user-event';
import React,{useState} from 'react';
import MenuData from '../Json Data/MenuData';
import food1 from '../image/food1.jpeg'
import '../css/page-css/Menu.css'
const Menu=(props)=> {
 

    return (

        <>
       
        <div class='menuPage  mt-5'>
            <div class='row px-3 m-1'>
                {
                    MenuData.map((menu,index)=>{
                        return(
                            <div class='col-lg-6 col-md-6  '>
                                <div class='row'>
                                        <div class='col-lg-6 p-1'>
                                             <div class='imgDiv2'>
                                             <img src={menu.image} class='img-fluid'/>
                                          </div>
                                        </div>
                                        <div class='col-lg-6'>
                                        <div class='contentDiv'>
                                                <h4>{menu.name}</h4>
                                                 <div class='dolar'>{menu.price}</div>

                                                    <p>{menu.description}</p>
                                                    <button class='btn'>Order now</button>
                                       </div>
                                         </div>
                                </div>
                                
                             </div>
                        )
                    })
                }
                

            </div>
        </div>
           
        </>
    );
}

export default Menu;