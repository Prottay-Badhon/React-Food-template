import React from 'react';
import { useEffect } from "react";
import '../css/Component-css/SliderSection.css'

import Aos from 'aos';
import 'aos/dist/aos.css';
function SliderSection(props) {
    const slider_div = {
       visibility: props.visibility
      };
      
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 1000,
            easing: 'ease',
            delay: 100,
            disable: 'mobile'
          
        });
      });
    return (
        <>
            <div class='sliderSection'>
                <div class='dark-overlay'>
                    <div class='container text-center'>
                        <div class='restaurent' >
                            <h1>{props.sliderName}</h1>
                            <p>{props.pathName}</p>
                        </div>
                        <div class='row'>
                       
                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-down' style={slider_div}>
                                <img  src={props.food1} class='rounded-circle'></img>
                                <div>
                                    <h6>{props.food1Name}</h6>
                                    <p class='text-muted'>
                                       {props.food1Des}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-down' style={slider_div}>
                                <img  src={props.food2} class='rounded-circle'></img>
                                <div>
                                    <h6>{props.food2Name}</h6>
                                    <p class='text-muted'>
                                      {props.food2Des}

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-up' data-aos-easing="ease" style={slider_div}>
                                <img  src={props.food3} class='rounded-circle'></img>
                                <div>
                                    <h6>{props.food3Name}</h6>
                                    <p class='text-muted'>
                                       {props.food3Des}
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class='col-lg-3'>
                            <div class='slider-div' data-aos='fade-up' data-aos-easing="ease" style={slider_div}>
                                <img  src={props.food4} class='rounded-circle'></img>
                                <div>
                                    <h6>{props.food4Name}</h6>
                                    <p class='text-muted'>
                                      {props.food4Des}

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