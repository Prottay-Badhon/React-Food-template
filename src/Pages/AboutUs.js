import React from 'react';
import "../css/page-css/AboutUs.css"
import drinks1 from "../image/drinks1.jpg"
import mango from "../video/mango.mp4" 
function AboutUs(props) {
    return (
        <>
          <div class="aboutUsPage ">
          
              <div class="row py-5">

                    <div class="col-lg-6 bg-light p-5">
                        <div class="aboutDiv">
                                <h3>About Us</h3>
                                <h1>About Feliciano</h1>
                                <p class="text-muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis 
                                laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium 
                                rem accusantium magni est. Error atque beatae et 
                                quisquam facilis exercitationem vero tempore quos aperiam, nostrum ducimus, pariatur.
                                </p>
                                
                            




                                <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check-square"></i></span> Quisquam facilis exercitationem vero</li>
                                <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Aaperiam nostrum ducimus</li>
                                <li><span class="fa-li"><i class="fas fa-check-square"></i></span>Lorem ipsum dolor sit amet</li>
                                <li><span class="fa-li"><i class="fas fa-check-square"></i></span>laudantium rem accusantium magni est</li>
                                </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 bg-dark text-white p-5">
                        <div class="Delicious">
                            <h1>A simple way to Eating Delicious</h1>
                            <p>Land behold it created good saw after she'd Our set living. Signs midst 
                                dominion creepeth morning 
                                laboris nisi ufsit aliquip ex ea commodo conse quat is aute irure, 
                                quis nostrud exer.
                            </p>
                            <button class="">Our Story</button>

                            <h3 class="text-center mt-3">Quality is Our first Priority</h3>
                            <img src={drinks1} class="img-fluid mt-4"></img>
                        </div>
                    </div>
              </div>

              <video autoPlay loop controls muted responsive> 
                  <source src={mango} type="video/mp4"></source>
              </video>

              <section  id="home-video" class="text-center text-light py-5">
                <div class="dark-overlay">
                    
                        
                        <div class="light-box" uk-lightbox>
                            <a href="https://www.youtube.com/watch?v=yCCyJD7cVKU" class="text-danger">
                            <i class="fa fa-play"></i>
                            </a>
                        <h2 class="mt-3 text-light">Restaurant in UK</h2>

                        </div>
                        </div>
                   
                  

            </section>
            </div>  
        </>
    );
}

export default AboutUs;