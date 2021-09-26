import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter as Router,Switch, Route} from "react-router-dom"

function App() {
  return (
  <>
<Router>
<Navbar>
  <Switch>
    <Route path="/" exact />
  </Switch>
</Navbar>
</Router>
    </>
  );
}

export default App;
