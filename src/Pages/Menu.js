import userEvent from '@testing-library/user-event';
import React,{useEffect, useState} from 'react';
import MenuData from '../Json Data/MenuData';
import food6 from '../image/food6.jpg'
import food7 from '../image/food7.jpg'
import food8 from '../image/food8.jpg'
import food10 from '../image/food10.jpg'

import '../css/page-css/Menu.css'
import SliderSection from '../Components/SliderSection';
import { useLocation } from 'react-router-dom';
import MenuCategory from "../Json Data/MenuCategory"
const Menu=(props)=> {
   const path = useLocation()
    const [MenuItem,setMenuItem] = useState(MenuData)
    const [icon,setIcon]=useState(false)
    
    const findBycategory=(catName)=>{
        
        const newItem  =  MenuData.filter((currElm)=>{
           return currElm.category.toUpperCase() === catName.toUpperCase()
           
        })
      setMenuItem(newItem )
       
    }

        const[item,setItem]=useState({
            food1:food6,
            food2:food7,
            food3:food10,
            food4:food8,
    
            food1Name:"Chicken rice, Singapore",
            food1Des:"sliced cucumber as the token vegetable. Variants include roasted chicken or soy sauce chicken",
    
            food2Name:"Poutine, Canada",
            food2Des:"French fries smothered in cheese curds and brown gravy.",
    
            food3Name:"Stinky tofu, Southeast Asia",
            food3Des:"Nothing really prepares you for the stench of one of the strangest dishes on Earth",
    
            food4Name:" Goi cuon (summer roll), Vietnam",
            food4Des:" pork, shrimp, herbs, rice vermicelli and other ingredients wrapped"
        })

       
        
    return (

        <>
        <SliderSection sliderName="Specialties" 
         pathName={"home"+path.pathname}
         food1={item.food1}
         food2={item.food2}
         food3={item.food3}
         food4={item.food4}
         
         food1Name={item.food1Name}
         food1Des={item.food1Des}
   
         food2Name={item.food2Name}
         food2Des={item.food2Des}
   
         food3Name={item.food3Name}
         food3Des={item.food3Des}
   
         food4Name={item.food4Name}
         food4Des={item.food4Des}
                 
         >

         </SliderSection>
        <div class='menuPage mt-lg-5'>
           <div class="text-center ">
                <ul class="subNavbar">
                    {
                        MenuCategory.map((info,index)=>{
                            const {name,id,status}=info
                         return (
                            <li onClick={()=>findBycategory(name)}>{name}<i className={icon ?"fas fa-caret-down": ""}></i></li>
                         )   
                        })
                    }
                   
                </ul>
            </div>
            <div class='row  px-3'>
                {
                    
                    MenuItem.map((menu,index)=>{
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
                                                 <div class='dolar'>Cost: {menu.price}</div>
                                                    <p>Category: {menu.category}</p>
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