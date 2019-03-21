import * as React from "react";
import { Router } from "@reach/router";
import { Homepage } from "./Homepage";
import "./primitive/scss/main.scss";

function App() {
  return (
    <Router>
      <Homepage path="/" />
    </Router>
  );
}

export default App;
