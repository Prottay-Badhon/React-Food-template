import logo from './logo.svg';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import SliderSection from './Components/SliderSection'
import AboutSection from './Components/AboutSection'
import ServiceSection from './Components/ServiceSection'
import MenuSection from './Components/MenuSection'



function App() {
  return (
    <div className="App">
     <Navbar/>
     <SliderSection/>
     <AboutSection/>
     <ServiceSection/>
     <MenuSection/>
    </div>
  );
}

export default App;
