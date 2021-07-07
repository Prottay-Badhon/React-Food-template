import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import "../css/Component-css/ScrollBtn.css"
function ScrollBtn(props) {
   
    const [displayScroll,setDisplayScroll]=useState(false)
   const scrollFn=()=>{
        if(window.scrollY>700){
            setDisplayScroll(true);
        }
        else setDisplayScroll(false);
    }
    const goToTop=()=>{		
        window.scrollTo(0,0);
    
    }
    const BtnVarient={
        hidden:{
            marginRight: "80px",
            opacity: 0
        },
        visible:{
            opacity: 1,
            marginRight: 0,  
        }
        
    }
   window.addEventListener("scroll",scrollFn)

        return (
        <>
       <motion.div class="scroll_btn_div"
       variants={BtnVarient}
       initial="hidden"
       animate={displayScroll? "visible": ""}
       >
                <motion.button className="btn scrollBtn " onClick={goToTop}>
                 <i class="fas fa-angle-double-up"></i>
                 </motion.button>
      </motion.div> 
        </>
    );
}

export default ScrollBtn;
