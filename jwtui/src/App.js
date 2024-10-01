import './App.css';
import {   Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HeroSection/HomeComponent';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
  <>
  <Navbar/>
   
      <Routes>
      <Route path='/' element={<HomeComponent/>} />
      </Routes>
    
 
  
  </>
  );
}

export default App;
