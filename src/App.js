import logo from './logo.svg';
import './Components/Navbar'
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
