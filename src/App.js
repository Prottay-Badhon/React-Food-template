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
import RecentPost from './Components/RecentPost';
import Footer from './Components/Footer';



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
      <RecentPost/>
      <Footer/>
    </div>
  );
}

export default App;
