import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Product from './pages/Product';
import Services from './pages/Services';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-blue-600 text-black p-5 flex items-center justify-center border-b border-black p-5 ">
        <h1 className="text-5xl font-mono">Uso de Rutas en React</h1>
      </div>
      <div className="flex">
        <div className="w-1/4 bg-blue-500 text-black p-4 border-b border-black p-5 font-mono text-2xl">
          <Layout />
        </div>
        <div className="w-3/4 p-3 flex items-center justify-center border-b border-black p-5 font-mono text-3xl">
          <Routes>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


