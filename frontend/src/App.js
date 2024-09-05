import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PropertyDetails from './pages/PropertyDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';    
import Locations from './pages/Locations';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <div className='font-urbanist text-lg'>
        <NavBar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
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
