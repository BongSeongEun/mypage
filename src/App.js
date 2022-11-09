import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* ---- 메인페이지 ---- */}
          <Route path='/' element={<Welcome />} />
        </Routes>
      </Router>
      {/* <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
        아이디 찾기&emsp;&emsp;
      </Link> */}
    </div>
  );
}

export default App;
