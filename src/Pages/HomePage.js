import React from 'react';
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

function HomePage(props) {
    return (
        <>
     <SliderSection/>
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