import React from "react";
import "../styles/layouts/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Wrapper from './Wrapper';

const App = () => {
  return (
    <Router>
      <Wrapper/>
    </Router>
  );
};

export default App;
