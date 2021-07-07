import React from 'react';
import "../css/page-css/AboutUs.css"
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
                    <div class="col-lg-6">
                        
                    </div>
              </div>
              
            </div>  
        </>
    );
}

export default AboutUs;