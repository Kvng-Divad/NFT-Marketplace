import React from 'react';
import './App.css';
import Choose from './Components/Choose/Choose';
import Clients from './Components/Clients/Clients';
import CreatSell from './Components/CreatSell/CreatSell';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Marketplace from './Components/Marketplace/Marketplace';
import Subscribe from './Components/Subscribe/Subscribe';


function App() {
  return (
    <div className="section">
        <div className='main-container'>
            <Home/>
          <div className='container'>
            <Clients/>
            <CreatSell/>
            <Choose/>
            <Marketplace/>
            <Subscribe/>
          </div>
          
        </div> 
        <Footer/>
    </div>
  );
}

export default App;
