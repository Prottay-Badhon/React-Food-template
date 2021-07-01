import React, { useState } from 'react';
import Slider from 'react-slick';
import "../css/page-css/ContactPage.css"
import ScrollToTop from "../Components/ScrollToTop"
import SliderData from "../Pages/SliderData"
import food1 from "../image/food1.jpeg"
import food2 from "../image/food2.jpeg"
import food3 from "../image/food3.jpeg"

import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPlay} from "react-icons/fa";
function ContactPage(props) {
    const settings = {
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [current,setCurrent]=useState(0);
    
    return (
        <>
            <section className='slider'>
            <Slider {...settings}>
              <div class="slide_background1">
                    <div class="dark-overlay">
                      <div class='contactDiv'>
                        <h1>Contact</h1>
                        <p>Home/Contact</p>
                      </div>
                    </div>
              </div>

              <div class="slide_background2">
                    <div class="dark-overlay">
                    <div class='contactDiv'>
                        <h1>Contact</h1>
                        <p>Home/Contact</p>
                      </div>
                    </div>
              </div>

              <div class="slide_background3">
                    <div class="dark-overlay">
                    <div class='contactDiv'>
                        <h1>Contact</h1>
                        <p>Home/Contact</p>
                      </div>
                    </div>
              </div>

            </Slider>        
                 
             </section>
             <section class="map_section">
              <div class="container">
                <div class="row">
                    <div class="col-lg-6">

                    </div>
                    <div class="col-lg-6">
                      <form>
                      <div class="form-group py-3">
                        <h3>Contact Us</h3>
                        </div>
                        <div class="form-group">
                          <input class="" placeholder="Your Name"></input>
                        </div>
                        <div class="form-group">
                          <input class="" placeholder="Your Email"></input>
                        </div>
                        <div class="form-group">
                          <input class="" placeholder="Subject"></input>
                        </div>
                        <div class="form-group">
                          <textarea placeholder="Message" rows="5"></textarea>
                        </div>
                        <div class="form-group">
                          <button class="sendBtn">Send Message</button>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
             </section>
        </>
    );
}

export default ContactPage