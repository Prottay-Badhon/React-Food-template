import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import "../css/Component-css/ScrollBtn.css"

function ScrollBtn(props) {
   
    const [displayScroll,setDisplayScroll]=useState(true)
   const scrollFn=()=>{
        if(window.scrollY>700){
            setDisplayScroll(true);
        }
        else setDisplayScroll(true);
    }
    const goToTop=()=>{		
        window.scrollTo(400,0)
    }
    window.addEventListener("scroll",scrollFn)
        return (
        <>
      <button className="btn scrollBtn " onClick={goToTop}>TOP</button>

        </>
    );
}

export default ScrollBtn;
