import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import { Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* ---- 메인페이지 ---- */}
          <Route path='/' element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
