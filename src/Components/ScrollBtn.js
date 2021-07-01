import React from 'react';
import { useState } from 'react';

function ScrollBtn(props) {
    const [displayScroll,setDisplayScroll]=useState(false)
    return (
        <>
            <button className="btn btn-success">Scroll</button>
        </>
    );
}

export default ScrollBtn;
