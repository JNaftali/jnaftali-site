import * as React from "react";
import { Router } from "@reach/router";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import "./primitive/scss/main.scss";

import { Homepage } from "./Homepage";

function App() {
  return (
    <>
      <SkipNavLink />
      <nav />
      <SkipNavContent />
      <Router>
        <Homepage path="/" />
      </Router>
    </>
  );
}

export default App;
