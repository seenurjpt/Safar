import './global.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './pages/home/Home';
import Destinations from './pages/destinations/Destinations'
import Places from './pages/places/Places'
import Packages from './pages/packages/Packages1';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>

    <Header/>
    <Routes>
        <Route path="home" element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="places" element={<Places/>} />
        <Route path="packages" element={<Packages />} />
        <Route path="About" element={<About/>} />
        <Route path="contact" element={<Contact />} /> 
    </Routes>

    <Footer/>
  </BrowserRouter>
  );
}

export default App;
