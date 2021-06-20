import React, { useState } from 'react';
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";
import '../css/Component-css/Navbar.css'
function Navbar(props) {

  const [click,setClick]=useState(false)
  
  function showNavbar(){
      setClick(!click);
  }
 
    return (
      
        <>
        <BrowserRouter>
        <div class='myNavbar'>
        <h4 class='text-light ml-1'>Feliciano 🎀</h4>
                  <ul class='my_nav_item' style={{marginTop: click ? '0px' :''}}>
                    <li><NavLink to=''>Home</NavLink></li>
                    <li><NavLink to=''>About</NavLink></li>
                    <li><NavLink to=''>Stories</NavLink></li>
                    <li><NavLink to=''>Contact</NavLink></li>
                    <li><NavLink to=''><button class='btn'>Book a table</button></NavLink></li>
                  </ul>
              <div class='bar' onClick={showNavbar}>
              <i className={click ? 'fas fa-close': 'fas fa-bars'}> </i><span> MENU</span>
              </div>
                </div>
        </BrowserRouter>
            
        </>
    );
}

export default Navbar;