import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "../node_modules/font-awesome/css/font-awesome.min.css";

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