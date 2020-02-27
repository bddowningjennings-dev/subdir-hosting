import React from 'react';
import './App.css';

import { Router, Link } from '@reach/router'

const One = () => <div>@ One</div>
const Two = () => <div>@ Two</div>

function App() {
  return (
    <div className="App">
      here<br /><br /><br />
      <nav>
        <Link to={`${process.env.PUBLIC_URL}/`}>One</Link>
        <Link to={`${process.env.PUBLIC_URL}/two`}>Two</Link>
      </nav>
      <br /><br /><br />
      <Router basepath={`${process.env.PUBLIC_URL}/admax`}>
        <One path={`/`} />
        <Two path={`two`} />
      </Router>
    
    </div>
  );
}

export default App;
