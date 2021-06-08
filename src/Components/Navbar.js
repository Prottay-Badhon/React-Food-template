import React from 'react';
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";
import '../css/Component-css/Navbar.css'
function Navbar(props) {
    return (
        <>
        <BrowserRouter>
          <nav class="navbar navbar-expand-md  px-5 py-3 ">
              <div class='mx-5'>
                 <a class="navbar-brand" href="#">Feliciano</a>
              </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse px-5">
    <ul class="navbar-nav ml-auto">
      <li class="my-nav-item active">
          <NavLink to='/' class='activeStyle'>Home</NavLink>
      </li>
      <li class="my-nav-item">
      <NavLink to='' class='activeStyle'>About</NavLink>
      </li>
     
      <li class="my-nav-item">
      <NavLink to='' class='activeStyle'>Menu</NavLink>
      </li>
      <li class="my-nav-item">
      <NavLink to='' class='activeStyle'>Stories</NavLink>
      </li>

      <li class="my-nav-item">
      <NavLink to='' class='activeStyle'>Contact</NavLink>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn" type="submit">Book a table</button>
    </form>
  </div>
</nav>  

<Switch>
    <Route exact-path='/'></Route>
    
</Switch>
</BrowserRouter>
        </>
    );
}

export default Navbar;