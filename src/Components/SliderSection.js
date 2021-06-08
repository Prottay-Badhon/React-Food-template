import React from 'react';
import { useEffect } from "react";
import '../css/Component-css/SliderSection.css'
import food1  from '../image/food1.jpeg'
import food4  from '../image/food4.jpeg'

import pizza  from '../image/pizza.jpeg'
import kabab  from '../image/kabab.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
function SliderSection(props) {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-quad',
            delay: 100,
            disable: 'mobile tab'
          
        });
      }, [])
    return (
        <>
            <div class='sliderSection'>
                <div class='dark-overlay'>
                    <div class='container'>
                        <div class='restaurent' data-aos='zoom-in'>
                            <h1>Best Restaurent </h1>
                        </div>
                        <div class='row'>
                       
                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-down' duration='1s'>
                                <img  src={food1} class='rounded-circle' style={{ height: '70px', width: '70px'}}></img>
                                <div>
                                    <h6>Grilled Beef with potatoes</h6>
                                    <p class='text-muted'>
                                        Meat, Potatoes, Rice, Tomatoe
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-down'>
                                <img  src={kabab} class='rounded-circle' style={{ height: '70px', width: '70px'}}></img>
                                <div>
                                    <h6>Grilled Beef with potatoes</h6>
                                    <p class='text-muted'>
                                        Meat, Potatoes, Rice, Tomatoe
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-up'>
                                <img  src={pizza} class='rounded-circle' style={{ height: '70px', width: '70px'}}></img>
                                <div>
                                    <h6>Grilled Beef with potatoes</h6>
                                    <p class='text-muted'>
                                        Meat, Potatoes, Rice, Tomatoe
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-up'>
                                <img  src={food4} class='rounded-circle' style={{ height: '70px', width: '70px'}}></img>
                                <div>
                                    <h6>Grilled Beef with potatoes</h6>
                                    <p class='text-muted'>
                                        Meat, Potatoes, Rice, Tomatoe
                                    </p>
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

export default SliderSection;