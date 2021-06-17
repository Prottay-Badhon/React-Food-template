import React from 'react';
import chef3 from '../image/chef3.jpg'
import chef4 from '../image/chef4.jpg'
import chef5 from '../image/chef5.jpg'
import chef6 from '../image/chef6.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/Component-css/RecentPost.css'
import { motion } from "framer-motion"

function RecentPost(props) {

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
    return (
        <>
              <div class='recentPost  py-5  mt-5 bg-white'>
               <div class='container py-lg-5'>
                   <h1 class='text-center' style={{color: 'burlywood'}}>𝓑𝓵𝓸𝓰</h1>
                   <h1 class='text-center font-italic'>Recent Post</h1>
                 <div class='row py-5 mt-lg-5'>
                   <div class='col-lg-4 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate='visible'
                   >
                    <img class="card-img-top" src={chef6} alt="Card image cap"/>
                    <div class="card-body text-left">
                        <p class="card-text">Sept. 06, 2019 Admin</p>
                        <h4 class="card-title">Taste the delicious foods in Asia</h4>
                        <p class="card-text d-inline">Read more</p>
                       <div class='comment d-inline'>
                       <i class="fad fa-comment-alt-lines"></i><span> 3</span>
                       </div>
                    </div>
                    </motion.div>
                   </div>
                   
                   <div class='col-lg-4 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate='visible'
                   >
                    <img class="card-img-top" src={chef5} alt="Card image cap"/>
                    <div class="card-body text-left">
                    <p class="card-text">Sept. 06, 2019 Admin</p>
                        <h4 class="card-title">Taste the delicious foods in Asia</h4>
                        <p class="card-text d-inline">Read more</p>
                       <div class='comment d-inline'>
                       <i class="fad fa-comment-alt-lines"></i><span> 3</span>
                       </div>
                    </div>
                    </motion.div>
                   </div>

                   <div class='col-lg-4 col-md-6 col-sm-12'>
                   <motion.div class="card" variants={cardVariants}
                   initial='hidden'
                   animate='visible'
                   >
                    <img class="card-img-top" src={chef4} alt="Card image cap"/>
                    <div class="card-body text-left">
                      <p class="card-text">Sept. 06, 2019 Admin</p>
                        <h4 class="card-title">Taste the delicious foods in Asia</h4>
                        <p class="card-text d-inline">Read more</p>
                       <div class='comment d-inline'>
                       <i class="fad fa-comment-alt-lines"></i><span> 3</span>
                       </div>
                    </div>
                    </motion.div>
                   </div>


                   

               </div>
               </div>

               
           </div> 
        </>
    );
}

export default RecentPost;