import * as React from "react";
import { Router } from "@reach/router";
import { SkipNavContent, SkipNavLink } from "@reach/skip-nav";
import { Homepage } from "./Homepage";
import "./primitive/scss/main.scss";

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
