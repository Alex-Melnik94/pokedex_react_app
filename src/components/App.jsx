import React from 'react';
import Navbar from './NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Pokedex from 'views/Pokedex/Pokedex';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </div>
  );
};
