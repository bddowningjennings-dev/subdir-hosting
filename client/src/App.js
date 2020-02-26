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
        <Link to="/">One</Link>
        <Link to="two">Two</Link>
      </nav>
      <br /><br /><br />
      <Router basepath="/admax">
        <One path="/" />
        <Two path="two" />
      </Router>
    
    </div>
  );
}

export default App;
