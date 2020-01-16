import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Headline from './component/Headline'
import News from './component/News'
import Sports from './component/Sports'
import India from './component/IndiaNews'
import Rebel from './component/Rebel'
import Editors from './component/Editors';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar />
      <Home />
      <Headline />
      <News />
      <Sports />
      <India />
      <Editors />



    </div>
  );
}

export default App;
