import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

const Home = () => <div>Home</div>
const One = () => <div>One</div>
const Two = () => <div>Two</div>

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="one">One</Link>
      <Link to="two">Two</Link>
    
      <br/>
      <br/>
      <br/>
      <br/>


      <Route path="/" component={Home} />
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
    </div>
  );
}

export default App;
