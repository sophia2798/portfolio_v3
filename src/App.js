import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
        <Route exact path="/">
        <Navbar/>
        <Header/>
        <About/>
        <div className="body">
          
        </div>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;