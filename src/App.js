import logo from './logo.svg';
import './App.css';
import './Components/Navbar'
import Navbar from './Components/Navbar';
import SliderSection from './Components/SliderSection'
import AboutSection from './Components/AboutSection'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SliderSection/>
     <AboutSection/>
    </div>
  );
}

export default App;
