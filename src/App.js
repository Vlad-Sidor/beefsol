import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import  Beef  from './pages/beef';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Beef/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;