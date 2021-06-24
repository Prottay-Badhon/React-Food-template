import React, { useState } from 'react';
import '../css/page-css/HomePage.css'
import '../image/food1.jpeg'
import '../image/food2.jpeg'
import '../image/food3.jpeg'

import SliderSection from '../Components/SliderSection'
import AboutSection from '../Components/AboutSection'
import ServiceSection from '../Components/ServiceSection'
import MenuSection from '../Components/MenuSection'
import ChefSection from '../Components/ChefSection'
import Reservation from '../Components/Reservation.js'
import CustomerSection from '../Components/CustomerSection.js'
import RecentPost from '../Components/RecentPost';
import Menu from './Menu';
import food1  from '../image/food1.jpeg'
import food4  from '../image/food4.jpeg'

import pizza  from '../image/pizza.jpeg'
import kabab  from '../image/kabab.jpeg'
function HomePage(props) {
    const[info,setInfo]=useState({
        sliderName: "Restaurant",
        food1:food1,
        food2:food4,
        food3:pizza,
        food4:kabab,

        food1Name:"Grilled Beef with potatoes",
        food1Des:" Meat, Potatoes, Rice, Tomatoe",

        food2Name:"Seafood paella, Spain",
        food2Des:"Shrimp, lobster, mussels and cuttlefish",

        food3Name:"Malted Custard French Toast",
        food3Des:"saucy, cheesy, fried-potato",

        food4Name:"Lamb Salad with Fregola",
        food4Des:" Meat, Potatoes, Rice, Tomatoe"



    })
    return (
        <>
     <SliderSection sliderName={info.sliderName}
      food1={info.food1}
      food2={info.food2}
      food3={info.food3}
      food4={info.food4}
      
      food1Name={info.food1Name}
      food1Des={info.food1Des}

      food2Name={info.food2Name}
      food2Des={info.food2Des}

      food3Name={info.food3Name}
      food3Des={info.food3Des}

      food4Name={info.food4Name}
      food4Des={info.food4Des}


      />
     <AboutSection/>
     <ServiceSection/>
     <MenuSection/>
     <ChefSection/>
     <Reservation/>
     <CustomerSection/>

      <RecentPost/>
        </>
    );
}

export default HomePage;