import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatefulComponent from "./components/StatefulComponent";
import ButtonWithBatteries from './components/ButtonWithBatteries';
function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <StatefulComponent />  {/* this component is technically on batteries too ! */ }
        <ButtonWithBatteries additionalText='Try passing a property showInitially={false} to the ButtonWithBatteries, and/or removing the "additionalText" property !' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
