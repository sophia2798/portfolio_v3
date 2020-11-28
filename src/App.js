import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <div className="body">
        
      </div>
    </div>
  );
}

export default App;