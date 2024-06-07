import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';//it is used to navigate from app.js to other components
import {Box} from '@mui/material';//A box is just a div with some shading and color
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    //sx defines that this is suitable for larger devices and margin auto
    <Box width="400px" sx={{width:{x1:'1488px'}}} m="auto ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element= {<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App