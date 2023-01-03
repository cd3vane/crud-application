import React from 'react';
import Employees from './components/Employees';
import AddEmployee from './components/AddEmployee';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <nav>
        <div className='nav-wrapper blue center-align'>
          <a href='/'>Emplyee Portal</a>
        </div>
      </nav>
      <div className='row'>
        <AddEmployee />
      </div>
      <div className='row'>
        <Employees />
      </div>
    </div>
  );
}

export default App;
