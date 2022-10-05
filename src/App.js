import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Produto from './Produto';
import Resultado from './Resultado';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Produto' element={<Produto/>} />
          <Route path='/Produto/Resultado/:id' element={<Resultado/>}/>
        </Routes>
    </div>
  );
};

export default App;
