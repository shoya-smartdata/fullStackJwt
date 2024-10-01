import './App.css';
import {   Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HeroSection/HomeComponent';
import Navbar from './components/Nav/Navbar';
import LoginModal from './pages/Login/LoginModel';
function App() {
  return (
  <>
  <Navbar/>
   
      <Routes>
      <Route path='/' element={<HomeComponent/>} />
      <Route path='/login' element={<LoginModal />} />
      </Routes>
    
 
  
  </>
  );
}

export default App;
