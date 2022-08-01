import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Carousel from './components/Carousel';
import About from './components/About';

import Tiger from './assets/World First jurasic Vr tour.44582121.png'
import World from './assets/5 TIGERS CHINESE NEW YEAR.aaff28f3.png'
import Open from './assets/OPEN HOUSE IN METAVERSE.9da820c4.png'
import Themall from './assets/THE MALL GROUP.54811c36.png'
import Town from './assets/TOWNHALL X METAVERSE.8ca0bed3.png'
import Virtual from './assets/VIRTUAL TELEMEDICAL.2505951d.png'
const images = [Tiger,World,Open,Themall,Town,Virtual]


function App() {


  return (
    <>
      <Navbar/>
      <Home />
      <Services />
      <Carousel images = {images}/>
      <About />
    </>
  );
}

export default App;
