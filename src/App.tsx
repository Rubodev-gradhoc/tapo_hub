import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

// import devices from "./mocks/devices.json";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
