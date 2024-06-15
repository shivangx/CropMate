// App.js
import React from 'react';
import LandForm from './components/LandForm';
import './App.css'
import Auth from './components/Auth';
import Finalweather from './components/Finalweather';
import Header from './components/Headercomponent';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Resource from './components/Resource';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Card from './components/Card';
// import Policy from './components/Policy';
// import { useState } from 'react';
// import { POLICIES } from './components/PolicyList';
const App = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/submit-land-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Recommendations:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      
      {/* <Auth/> */}
    {/* <Maincomponent/> */}
    {/* <Navbar/> */}
    <Header/>
  
      {/* <Finalweather/> */}
      {/* <LandForm onSubmit={handleSubmit} /> */}
      <Routes>
        <Route path='/' element={<LandForm onSubmit={handleSubmit} />}/>
        <Route path='chat' element={<Chat/>}/>
        {/* <Route path="/policies" render={() => <Policy policy={policy} />} /> */}
        <Route path='resource' element={<Resource/>}/>
        <Route path='weather' element={<Finalweather />}/>

      </Routes>
      {/* <Chat/> */}
     {/* <Footer/> */}
    </div>
  );
};

export default App;
