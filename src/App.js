import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Cards/>
     <Cards/>
     <Cards/>
    </div>
  );
}

export default App;
