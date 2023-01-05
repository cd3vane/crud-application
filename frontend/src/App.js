import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import SingleEmployee from './components/SingleEmployee';
import EditEmployee from './components/EditEmployee';

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
      <nav>
        <div className='nav-wrapper teal darken-4 center-align'>
          <a href='/' className="brand-logo center">Employee Portal</a>
        </div>
      </nav>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee/:id" element={<SingleEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
