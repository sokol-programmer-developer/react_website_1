import React from "react";
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home, Products, Services, SignUp} from "./Pages";


function App() {
  return (
      <>

        <Router>

        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' exact  component={Services} />
        <Route path='/Products' exact  component={Products} />
        <Route path='/SignUp' exact  component={SignUp} />
        </Switch>

        </Router>
      </>
  );
}

export default App;
