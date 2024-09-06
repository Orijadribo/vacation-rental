import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PropertyDetails from './pages/PropertyDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Locations from './pages/Locations';
import Location from './pages/Location';
import LoginSignUp from './pages/LoginSignUp';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <div className='font-urbanist text-lg'>
        <NavBar setIsLogin={setIsLogin} />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginSignUp isLogin={isLogin} />} />
          <Route path='/signup' element={<LoginSignUp isLogin={isLogin} />} />
          <Route path='/properties/:id' element={<PropertyDetails />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/locations/:locationId' element={<Location />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
