import {React ,useRef, useEffect,useLayoutEffect,useState} from 'react';
import food1 from '../image/food1.jpeg'
import chef1 from '../image/chef1.jpeg'
import chef2 from '../image/chef2.jpeg'
import CountUp from 'react-countup';
import { motion } from "framer-motion"
import '../css/Component-css/AboutSection.css'
import ScrollTrigger from 'react-scroll-trigger';

function AboutSection(props) {
        const [count, setCount]=useState(false)
        const [countMobile, setCountMobile]=useState(false)

       
    const animationVariant ={
        hidden:{
            opacity: 0,
            marginTop: '100px'
        },
        visible:{
            opacity: 1,
            marginTop: '0px',
           
        },
        transition:{
            delay: 2
        }

        
    }
    const showAnimation =()=>{
            if(window.scrollY >= 700){
                setCount(true)
            }
            if(window.scrollY >= 3000){
                setCountMobile(true)
            }
    }
    window.addEventListener('scroll',showAnimation)
    return (
        <>
        
            <div class='aboutSection bg-white text-center py-5'>

                <div class='row p-5'>
                    <div class='col-lg-7  col-sm-12 px-5'>
                        <div class='row'>
                            <div class='col-lg-6 col-sm-12'>
                                    <img src={chef1} class='img-fluid'></img>
                            </div>
                            <div class='col-lg-6 col-sm-12 py-5'>
                                <div class='img-div'>
                                    <img src={chef2} class='img-fluid'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-5  col-sm-12'>
                        <div class='feliciano text-left'>
                            <h1 style={{ color: '#8c6f07'}}> 𝒜𝒷♡𝓊𝓉</h1>
                            <h1 class='font-italic'>𝐹𝑒𝓁𝒾𝒸𝒾𝒶𝓃𝑜 Restaurant</h1>
                            <p class='text-muted mt-5'>
                                A small river named Duden flows by their place and supplies it with
                                 the necessary regelialia.
                                 It is a paradisematic country, in which roasted parts
                                  of sentences fly into your mouth.
                            </p>
                            <p>Mon - Fri <span class='font-weight-bold'> 8 AM - 11 PM</span></p>
                            <h1 class='number' style={{ color: '#C8A97E',fontWeight:'bold'}}>+ 1-978-123-4567</h1>
                        </div>
                    </div>
                </div>
                <div class='row p-5'>
                    <div class='col-lg-8 px-5'>
                        <div class='row'>
                            <div class='col-lg-3'>
                            <motion.div class='aboutDiv text-left' 
                                variants={animationVariant}
                                initial='hidden'
                                animate={count ? 'visible': ''}
                                >
                                    <h1><CountUp end={count? 18:0} duration={6} start={0} redraw={true} initial={18}></CountUp></h1>
                                    <p class='text-uppercase'>years of experience</p>
                                </motion.div>
                            </div>
                            <div class='col-lg-3'>
                                <motion.div class='aboutDiv text-left' 
                                variants={animationVariant}
                                initial='hidden'
                                animate={count ? 'visible': ''}
                                >
                                    <h1><CountUp end={count? 100:0} duration={3} start={0} redraw={true} initial={18}></CountUp></h1>
                                    <p class='text-uppercase'>Menus/Dish</p>
                                </motion.div>
                            </div>
                            <div class='col-lg-3'>
                            <motion.div class='aboutDiv text-left' 
                                variants={animationVariant}
                                initial='hidden'
                                animate={count ? 'visible': ''}
                                >
                                    <h1><CountUp end={count? 50:0} duration={3} start={0} redraw={true} initial={18}></CountUp></h1>
                                    <p class='text-uppercase'>staffs</p>
                                </motion.div>
                            </div>
                            <div class='col-lg-3'>
                            <motion.div class='aboutDiv text-left' 
                                variants={animationVariant}
                                initial='hidden'
                                animate={count ? 'visible': ''}
                                >
                                    <h1><CountUp end={count? 15000:0} duration={3} start={0} redraw={true} initial={18}></CountUp></h1>
                                    <p class='text-uppercase'>happy customer</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-4 text-left px-5' style={{lineHeight: '35px',fontSize: '20px',color: '#9A9A9A'}}>
                        <p>A small river named Duden flows by
                             their place and 
                            supplies it with the necessary regelialia.
                            </p>

                    </div>
                </div>
            </div>        
        </>
    );
}

export default AboutSection;