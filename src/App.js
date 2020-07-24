import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';  //make sure to import your component if you are using it in any file.
import HelloYourName from './HelloYourName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Let' Learn React
        </a>
      </header>
      <Hello />
      <HelloYourName name="Shailza" favFood="Pizza" />
      <HelloYourName name="Sharma" favFood="Noodles" />
    </div>
    
  );
}

export default App;
