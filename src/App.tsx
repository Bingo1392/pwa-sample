import React from 'react';
import './App.css';

const buttonStyle = {
  padding: "8px 16px",
  margin: "16px",
  width: "120px"
};

function App() {
  document.title="PWA sample App";
  return (
    <div className="App">
      <header className="App-header">
        <h1>PWA sample App</h1>
        <h3>created by Jan Žitník</h3>
        <div style={{display: 'flex'}}>
        <button style={buttonStyle}>Registrace</button>
        <button style={buttonStyle}>Přihlášení</button>
        </div>
      </header>
    </div>
  );
}

export default App;
