/**
 * Main entry point for the public facing area.
 * Everything gets bundled from this file, browserify takes care of loading the dependencies.
 *
 * Note that "Single Page Application" was an unhappy choice: even if the public facing area of a web application
 * is a Single Page, it still makes sense to have a dedicated page for its administrative area, if any.
 * The code should be organized in logical areas, and common code that can be reused in any area
 * (e.g. preloaders, dialogs, etc.).
 *
 * - Roberto Prevato
 */

// lambdas: with this setup, they gets transpiled into functions by babel.
let foo = () => {
  console.log("... starting the page");
};
foo();

//load the English
import en from "./locale/en"
I.add(en);

import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, useRouterHistory } from "react-router"
import { createHashHistory } from "history"
//
// remove the stupid `?_k=*` query string from react-router
// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import App from "./app"
import Dashboard from "./dashboard";
import HelloWorld from "./hello-world";
import GettingStarted from "./getting-started"
import FormExample from "./form-example"
import About from "./about"


render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <IndexRoute component={Dashboard}/>
      <Route path="/hello-world" component={HelloWorld}/>
      <Route path="/getting-started" component={GettingStarted}/>
      <Route path="/about" component={About}/>
      <Route path="/form" component={FormExample}/>
    </Route>
  </Router>
), document.getElementById("root"))
