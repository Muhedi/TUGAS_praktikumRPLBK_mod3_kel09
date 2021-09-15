import React from 'react';
import './App.css';
import Home from "./konterhp/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "10px", marginLeft: "550px", marginRight: "550px", background: "rgba(0,255,0,0.3)" }}>                     
        <h1>TOKOPAEDI.COM</h1>
        <h3>[Pusat Pulsa dan Kuota "Kelompok 9"]</h3>
        <div style={{ border: "7px solid red" }}>         
        <Home />
        </div>
        </div>
      </div>
    )
  }
}

export default App;