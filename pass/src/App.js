import React from 'react';
import './App.css';
import Nav from './components/layout/NavBar';
import SearchClinic from './components/pages/SearchClinic';


function App() {
  return (
    <div className="App">
      <Nav />
      <SearchClinic/>
    </div>
  );
}

export default App;
