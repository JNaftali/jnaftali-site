import * as React from "react";
import { Router } from "@reach/router";
import { Homepage } from "./Homepage";

function App() {
  return (
    <Router>
      <Homepage path="/" />
    </Router>
  );
}

export default App;
