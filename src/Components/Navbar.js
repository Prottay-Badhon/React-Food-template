import React, { useState } from 'react';
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";
import Menu from '../Pages/Menu'
import '../css/Component-css/Navbar.css'
import HomePage from "../Pages/HomePage"
import Error from './Error';
import Stories from '../Pages/Stories';
import ContactPage from '../Pages/ContactPage';
import SliderData from '../Pages/SliderData';
function Navbar(props) {

  
  
  const [sticky, setSticky]=useState(false);

    const stickyNavbar=()=>{
    if(window.scrollY > 400){
      setSticky(true) 
    }
    else setSticky(false)
    }

    window.addEventListener("scroll",stickyNavbar);


  const [click,setClick]=useState(false)
  
  function showNavbar(){
      setClick(!click);
  }
 
    return (
      
        <>
        <div className={sticky? "myNavbar fixed-top navChanged": "myNavbar"}>
        <h4 class='text-light ml-5'>Feliciano 🎀</h4>
                  <ul class='my_nav_item p-0' style={{marginTop: click ? '0px' :''}}>
                    <li>
                      <NavLink to='/' exact activeStyle={{color: "burlywood"}}>Home
                      </NavLink>
                    </li>
                    <li><NavLink to=''  exact activeStyle={{color: "burlywood"}}>About</NavLink></li>
                    <li><NavLink to='/menu'  exact activeStyle={{color: "burlywood"}}>Menu</NavLink></li>
                    <li><NavLink to='/story'  exact activeStyle={{color: "burlywood"}}>Stories</NavLink></li>
                    <li><NavLink to='/contact'  exact activeStyle={{color: "burlywood"}}>Contact</NavLink></li>
                    <li><NavLink to=''><button class='btn'>Book a table</button></NavLink></li>
                  </ul>
              <div class='bar' onClick={showNavbar}>
              <i className={click ? 'fas fa-close': 'fas fa-bars'}> </i><span> MENU</span>
              </div>
                </div>
              <Switch>
                <Route exact path='/' component={HomePage}></Route>
                <Route exact path="/menu" component={Menu}></Route>
                <Route exact path="/story" component={Stories}></Route>
                <Route exact path="/contact" component={()=><ContactPage slides={SliderData}/>}></Route>
                <Route component={Error}></Route>

              </Switch>
            
        </>
    );
}

export default Navbar;