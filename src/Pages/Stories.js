import React from 'react';
import SliderSection from '../Components/SliderSection';
import PaginationComponent from '../Components/PaginationComponent';
function Stories(props) {
    return (
        <>
           <SliderSection visibility="hidden"
            sliderName={"Stories"}
            pathName={"Home/Stories"}        
           />
           <div class="container">
           <PaginationComponent/>
           </div>
        </>
    );
}

export default Stories;