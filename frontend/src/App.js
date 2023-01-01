import React from 'react';
import Contacts from './components/Contacts'
import logo from './logo.svg';
import './App.css';

const App = () => {

  

  return (
    <div className="container-fluid">
      <nav>
        <div className='nav-wrapper blue center-align'>
          <a href='/' className='brand-logo'>Contacts</a>
        </div>
      </nav>
      <div className='row'>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
