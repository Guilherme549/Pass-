import React from 'react';
import './App.css';
import Nav from './components/layout/NavBar';
import SearchClinic from './components/pages/SearchClinic';
import Register from './components/pages/Register';
import Login from './components/pages/LoginPage';
import LoggedInPage from './components/pages/LoggedInPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
       <Nav />
       <Routes>
          <Route path='register/' element={<Register />}></Route>
          <Route path='login/' element={<Login />}></Route>
          <Route path='search/' element={<SearchClinic />}></Route>
          <Route path='loggedin/' element={<LoggedInPage />}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
