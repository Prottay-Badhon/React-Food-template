import React from 'react';
import '../css/Component-css/CustomerSection.css'
import food1 from '../image/food1.jpeg'
import face1 from '../image/face1.jpeg'
import face2 from '../image/face2.jpeg'
import face3 from '../image/face3.jpeg'
import Slider from "react-slick";


function CustomerSection(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    return (
        <>
            <div class='customerSection text-center py-5'>
                <div class='container'>
                    <Slider {...settings}>
                        <div class="card">
                            <img class="card-img-top rounded-circle" src={face1} alt="Card image cap"/>
                            <div class='quote'><i class="fas fa-quote-left"></i></div>
                            <div class="card-body">
                                <p class="card-text">
                                A small river named Duden flows by their
                                 place and supplies it with the necessary regelialia.
                                   
                                </p>
                                <h4 class='mt-4 text-gray'>
                                    Rose Headerson
                                </h4>
                                <p class='customer'>CUSTOMER</p>
                            </div>
                            </div>

                            <div class="card">
                            <img class="card-img-top rounded-circle" src={face2} alt="Card image cap"/>
                            <div class='quote'><i class="fas fa-quote-left"></i></div>
                            <div class="card-body">
                                <p class="card-text">
                                A small river named Duden flows by their
                                 place and supplies it with the necessary regelialia.
                                   
                                </p>
                                <h4 class='mt-4 text-gray'>
                                    Rose Headerson
                                </h4>
                                <p class='customer'>CUSTOMER</p>
                            </div>
                            </div>



                            <div class="card">
                            <img class="card-img-top rounded-circle" src={face3} alt="Card image cap"/>
                            <div class='quote'><i class="fas fa-quote-left"></i></div>
                            <div class="card-body">
                                <p class="card-text">
                                A small river named Duden flows by their
                                 place and supplies it with the necessary regelialia.
                                   
                                </p>
                                <h4 class='mt-4 text-gray'>
                                    Rose Headerson
                                </h4>
                                <p class='customer'>CUSTOMER</p>
                            </div>
                            </div>


                            <div class="card">
                            <img class="card-img-top rounded-circle" src={face2} alt="Card image cap"/>
                            <div class='quote'><i class="fas fa-quote-left"></i></div>
                            <div class="card-body">
                                <p class="card-text">
                                A small river named Duden flows by their
                                 place and supplies it with the necessary regelialia.
                                   
                                </p>
                                <h4 class='mt-4 text-gray'>
                                    Rose Headerson
                                </h4>
                                <p class='customer'>CUSTOMER</p>
                            </div>
                            </div>


                            <div class="card">
                            <img class="card-img-top rounded-circle" src={face2} alt="Card image cap"/>
                            <div class='quote'><i class="fas fa-quote-left"></i></div>
                            <div class="card-body">
                                <p class="card-text">
                                A small river named Duden flows by their
                                 place and supplies it with the necessary regelialia.
                                   
                                </p>
                                <h4 class='mt-4 text-gray'>
                                    Rose Headerson
                                </h4>
                                <p class='customer'>CUSTOMER</p>
                            </div>
                            </div>
                        
                        </Slider>
                    </div>
                </div>
        </>
    );
}

export default CustomerSection;