import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/Component-css/ServiceSection.css'
function ServiceSection(props) {
    Aos.init();
    return (
        <>
          <div class='serviceSection bg-light p-5 text-center'>
             <div class='serveDiv' data-aos='fade-up'>
             <h1 class='pt-5 serve1'>𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼</h1>
             <h1 class='serve2'>Catering Services</h1>
             </div>

          <div class='row p-5'>
          <div class='col-lg-4'>
            <div class='serviceDiv text-center py-3' data-aos='fade-up' data-aos-duration='400'>
                    <div class='py-2'><i class="fa fa-birthday-cake"></i></div>
                    <h3 class='py-3'>Birthday Party</h3>
                    <p class=''>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
            </div> 
            
            <div class='col-lg-4'>
            <div class='serviceDiv text-center py-3' data-aos='fade-up' data-aos-duration='700'>
                    <div class='py-2'><i class="fa fa-landmark"></i></div>
                    <h3 class='py-3'>Business Party</h3>
                    <p class=''>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
            </div>

            <div class='col-lg-4'>
            <div class='serviceDiv text-center py-3' data-aos='fade-up' data-aos-duration='1000'>
                    <div class='py-2'><i class="fa fa-hand-holding-heart"></i></div>
                    <h3 class='py-3'>Wedding Party</h3>
                    <p class=''>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
            </div>
               
          </div>    
          </div>  
        </>
    );
}

export default ServiceSection;