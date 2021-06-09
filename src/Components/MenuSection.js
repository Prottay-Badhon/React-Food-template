import React from 'react';
import food1 from '../image/food1.jpeg'
import '../css/Component-css/MenuSection.css'
function MenuSection(props) {
    return (
        <>
            <div class='menuSection bg-white text-center'>
                <div class='container'>
                <div class='row first_row'>
                    <div class='col-lg-6 col-md-6'>
                        <div class='row'>
                            <div class='col-lg-6 col-md-12 col-lg-12'>
                            <div class='menu_img_div img-fluid'>
                                <img src={food1} class=''></img>
                            </div>
                            </div>
                            <div class='col-lg-6 py-5 col-md-12 col-lg-12'>
                            <div class='menu_order_div px-3'>
                                   <h4>Grilled Beef with Potatoes </h4>
                                  <div class='dolar'>40$</div>
                                <p>Meat, Potatoes, Rice, Tomatoe</p>
                                <button class='btn'>Order now</button>
                            </div>
                            </div>
                        </div>
                       
                    </div>

                    <div class='col-lg-6 col-md-6'>
                        <div class='row'>
                            <div class='col-lg-6 col-md-12 col-lg-12'>
                            <div class='menu_img_div img-fluid'>
                                <img src={food1} class=''></img>
                            </div>
                            </div>
                            <div class='col-lg-6 py-5 col-md-12 col-lg-12'>
                            <div class='menu_order_div px-3'>
                                   <h4>Grilled Beef with Potatoes </h4>
                                  <div class='dolar'>40$</div>
                                <p>Meat, Potatoes, Rice, Tomatoe</p>
                                <button class='btn'>Order now</button>
                            </div>
                            </div>
                        </div>
                       
                    </div>
                    
                </div>


                

            


                </div>

                

            </div>
        </>
    );
}

export default MenuSection;