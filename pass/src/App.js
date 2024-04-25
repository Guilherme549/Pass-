import React from 'react';
import './App.css';
import Nav from './components/layout/NavBar';
import SearchClinic from './components/pages/SearchClinic';
import Signup from './components/pages/Signup'
import Login from './components/pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
          <Route path='Signup/' element={<Signup />}></Route>
          <Route path='login/' element={<Login/>}></Route>
          <Route path='search/' element={<SearchClinic />}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
