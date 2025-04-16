import React from 'react';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';

import MainLayout from './layout/MainLayout';
import Homepage from './pages/Homepage';
import About from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TrackCargo from './pages/TrackCargoPage';
import TrackTools from './pages/TrackTools';
import LoginPage from './pages/LoginPage';
import GetAQuote from './pages/GetAQuote';
import ContactUs from './pages/ContactPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='track-cargo' element={<TrackCargo />} />
      <Route path='trade-tools' element={<TrackTools />} />
      <Route path='contact' element={<ContactUs/>} />
      <Route path='get-quote' element={<GetAQuote />} /> 
      <Route path='login' element={<LoginPage />} />
      <Route path='sign-up' element={<SignUpPage />} /> 

    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
