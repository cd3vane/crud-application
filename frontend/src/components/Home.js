import React from 'react';
import Employees from './Employees';
import AddEmployee from './AddEmployee';
import '../App.css';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className='row'>
        <AddEmployee />
      </div>
      <div className='row'>
        <Employees />
      </div>
    </div>
  );
}

export default Home;