import React from 'react';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
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
        <AddContact />
      </div>
      <div className='row'>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
