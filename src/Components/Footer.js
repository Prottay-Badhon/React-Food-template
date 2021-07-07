import React, { useState } from 'react';
import '../css/Component-css/Footer.css'
import { motion } from "framer-motion"
import food1 from '../image/food1.jpeg'
import ScrollBtn from './ScrollBtn';
function Footer(props) {
    const [footerAni,setFooterAni]=useState(false)
    var x = document.getElementsByClassName("footer");
    const myFooter=()=>{
        
            setFooterAni(true)
       
    }
    window.addEventListener("scroll",myFooter)
    const iconVariant={
        hidden: { opacity: 0,
        },
        show: {
          opacity: 1,

          transition: {
            staggerChildren: .2
          }
        }
    }
    const item = {
        hidden: { 
            opacity: 0,
         },
        show: {
             opacity: 1,
            
            }
      }
    return (
        <>

            <div class='footer text-white py-5'>

                <div class='container py-5'>
                    <div class='row'>
                        <div class='col-lg-3'>
                            <div class='footer_div'>
                                <h3 class=''>Feliciano</h3>
                                <p class='mt-5 '>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia,
                                     there live the blind texts.
                                </p>

                                <motion.ul class='social_icon text-left' variants={iconVariant} initial='hidden' animate='show'>
                                    <motion.li class='m-0' variants={item}><i class='fa fa-twitter'></i></motion.li>
                                    <motion.li class='ml-3' variants={item}><i class='fa fa-facebook'></i></motion.li>
                                    <motion.li class='ml-3' variants={item}><i class='fa fa-instagram'></i></motion.li>

                                 </motion.ul>
                            </div>
                        </div>

                        <div class='col-lg-3'>
                            <div class='footer_div'>
                                <h3 class='mb-5'>Open Hours</h3>
                                <table class=''>
                                    <tr class=''>
                                        <td>Sunday</td>
                                        <td class='pl-5'>9:00 - 24:00</td>

                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td class='pl-5'>9:00 - 24:00</td>

                                    </tr>

                                    <tr>
                                        <td>Tuesday</td>
                                        <td class='pl-5'>9:00 - 24:00</td>

                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td class='pl-5'>9:00 - 24:00</td>

                                    </tr>

                                    <tr>
                                        <td>Thursday</td>
                                        <td class='pl-5'>9:00 - 24:00</td>

                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td class='pl-5'>9:00 - 24:00</td>

                                    </tr>
                                   
                                    
                                </table>
                            </div>
                        </div>

                        <div class='col-lg-3'>
                            <div class='footer_div'>
                            <h3 class=''>Instagram</h3>
                                <img class='img-fluid mt-5' src={food1}></img>
                            </div>
                        </div>

                        <div class='col-lg-3'>
                            <div class='footer_div'>
                            <h3 class=''>Newsletter</h3>
                                <p>Far far away, behind the word mountains, far from the countries.</p>
                                <form>
                                    <div class='form-group'>
                                    <input class='' placeholder="Enter email address" type='email'/>
                                   <button class='subscribe  mt-2'>Subscribe</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <h6 class='text-center   mt-5'>Copyright ©2021 All rights reserved | This template is made with  by <span><i class='fa fa-heart'></i></span> 𝓑𝓪𝓭𝓱𝓸𝓷</h6>

                </div>
            </div>
        </>
    );
}

export default Footer;