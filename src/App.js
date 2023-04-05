import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route,Routes, Navigate} from 'react-router-dom';
import './global.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './pages/home/Home';
import Destinations from './pages/destinations/Destinations'
import Places from './pages/places/Places'
import Packages from './pages/packages/Packages1';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';

function App() {

const [data, setData] = useState()
  const getApi = () =>{
    axios.get("http://localhost:3004/users")
    .then((result) => {
      console.log(result)
      setData(result.data)
    })
  }


  useEffect(() => {
    getApi()  
    console.log("Tatiya Bichhu")
  }, [] )
  return (
    <BrowserRouter>

    <Header/>
    <Routes>
        <Route path="home" element={<Home  data={data} />} />
        <Route path="" element={<Navigate to="/home" />}/>
        <Route path="/login" element={<Login />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="places" element={<Places/>} />
        <Route path="packages" element={<Packages />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} /> 
    </Routes>

    <Footer/>
  </BrowserRouter>
  );
}

export default App;
