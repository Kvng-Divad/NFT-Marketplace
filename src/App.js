import React from 'react';
import './App.css';
import Clients from './Components/Clients/Clients';
import CreatSell from './Components/CreatSell/CreatSell';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="section">
        <div className='main-container'>
            <Home/>
          <div className='container'>
            <Clients/>
            <CreatSell/>
          </div>
        </div> 
    </div>
  );
}

export default App;
