import logo from './logo.svg';
import { useState } from 'react';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import MyRouter from './Components/MyRouter';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Menu from "./Pages/Menu";
import "./css/Component-css/ScrollBtn.css";
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";

function App() {
  const [displayScroll,setDisplayScroll]=useState(true)
  const scrollFn=()=>{
       if(window.scrollY>700){
           setDisplayScroll(true);
       }
       else setDisplayScroll(true);
   }
   window.addEventListener("scroll",scrollFn)   
  return (
    <div className="App" style={{margin: "0px"}}>
     
     <BrowserRouter>
       <Navbar/>
       </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
