import logo from './logo.svg';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import SliderSection from './Components/SliderSection'
import AboutSection from './Components/AboutSection'
import ServiceSection from './Components/ServiceSection'
import MenuSection from './Components/MenuSection'
import ChefSection from './Components/ChefSection'
import Reservation from './Components/Reservation.js'
import CustomerSection from './Components/CustomerSection.js'




function App() {
  return (
    <div className="App">
     <Navbar/>
     <SliderSection/>
     <AboutSection/>
     <ServiceSection/>
     <MenuSection/>
     <ChefSection/>
     <Reservation/>
     <CustomerSection/>

    </div>
  );
}

export default App;
