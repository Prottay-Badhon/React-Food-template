import logo from './logo.svg';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import MyRouter from './Components/MyRouter';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Menu from "./Pages/Menu"
import ScrollBtn from './Components/ScrollBtn';
import { BrowserRouter, Route, Link,NavLink, Switch} from "react-router-dom";

function App() {
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
