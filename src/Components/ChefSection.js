import React, { useState } from 'react';
import chef1 from '../image/chef1.jpeg'

import chef3 from '../image/chef3.jpg'
import chef4 from '../image/chef4.jpg'
import chef5 from '../image/chef5.jpg'
import chef6 from '../image/chef6.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from "framer-motion"


import '../css/Component-css/ChefSection.css'
function ChefSection(props) {

    const [Animy,setAnymy]=useState(false)
   const showAnimation=()=>{
        if(window.scrollY>2700){
            setAnymy(true)
        }
        else
        setAnymy(false);
    }
    window.addEventListener("scroll",showAnimation)
    const rowVariant={
        off: { opacity: 0 },
        on: {
          opacity: 1,
          transition: {
            staggerChildren: 1
          }
        }
    }
    const cardVariants={
        hidden:{
            marginTop: '500px', 
            opacity: 0
        },
        visible:{
            marginTop: 0, 
            opacity: 1,
            transition:{
                duration: 1,

            }
        }
    }

    const iconVariant={
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 1
          }
        }
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    AOS.init();
    return (
        <>
           <div class='chefSection  py-5  mt-5 bg-white'>
               <div class='container py-lg-5'>
                   <h1 class='text-center' style={{color: 'burlywood'}}>𝓒𝓱𝓮𝓯</h1>
                   <h1 class='text-center font-italic'>Our Master Chef</h1>
                 <motion.div class='row py-5 mt-lg-5' variants={rowVariant}>
                   <div class='col-lg-3 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate={Animy? "visible": ""}
                   ><div class='overflow'>
                    <img class="card-img-top" src={chef6} alt="Card image cap"/>
                    </div>
                    <div class="card-body text-left">
                        <h5 class="card-title">Jhon Smooth</h5>
                        <p class="card-text">Restaurent owner</p>
                        <motion.ul class='social_icon text-left' variants={iconVariant}
                        initial='hidden'
                        animate={Animy? "show": ""}
                        >
                            <motion.li variants={item}><i class='fa fa-twitter'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-facebook'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-google'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-instagram'></i></motion.li>
                         

                        </motion.ul>
                    </div>
                    </motion.div>
                   </div>
                   
                   <div class='col-lg-3 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate={Animy? "visible": ""}
                   >
                   <div class='overflow'>

                    <img class="card-img-top" src={chef5} alt="Card image cap"/>
                    </div>
                    <div class="card-body text-left">
                        <h5 class="card-title">Jhon Smooth</h5>
                        <p class="card-text">Restaurent owner</p>
                        <motion.ul class='social_icon text-left' variants={iconVariant}
                        initial='hidden'
                        animate={Animy? "show": ""}
                        >
                            <motion.li variants={item}><i class='fa fa-twitter'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-facebook'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-google'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-instagram'></i></motion.li>
                         

                        </motion.ul>
                    </div>
                    </motion.div>
                   </div>

                   <div class='col-lg-3 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate={Animy? "visible": ""}
                   >
                   <div class='overflow'>
                    <img class="card-img-top" src={chef4} alt="Card image cap"/>
                    </div>
                    <div class="card-body text-left">
                        <h5 class="card-title">Jhon Smooth</h5>
                        <p class="card-text">Restaurent owner</p>
                        <motion.ul class='social_icon text-left' variants={iconVariant}
                        initial='hidden'
                        animate={Animy? "show": ""}
                        >
                            <motion.li variants={item}><i class='fa fa-twitter'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-facebook'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-google'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-instagram'></i></motion.li>
                         

                        </motion.ul>
                    </div>
                    </motion.div>
                   </div>


                   <div class='col-lg-3 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate={Animy? "visible": ""}
                   >
                   <div class='overflow'>
                    <img class="card-img-top" src={chef3} alt="Card image cap"/>
                    </div>
                    <div class="card-body text-left">
                        <h5 class="card-title">Jhon Smooth</h5>
                        <p class="card-text">Restaurent owner</p>
                        <motion.ul class='social_icon text-left' variants={iconVariant}
                        initial='hidden'
                        animate={Animy? "show": ""}
                        >
                            <motion.li variants={item}><i class='fa fa-twitter'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-facebook'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-google'></i></motion.li>
                            <motion.li variants={item}><i class='fa fa-instagram'></i></motion.li>
                         

                        </motion.ul>
                    </div>
                    </motion.div>
                   </div>

               </motion.div>
               </div>

               
           </div> 
        </>
    );
}

export default ChefSection;