/**
 * Dashboard view.
 *
 * - Roberto Prevato
 */
import React from "react"

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>React js with Gulp task runner demo.</p>
        <p>This demo offers an example of technology stack using React:</p>
        <ol>
          <li>Integration with Gulp task runner to build the JavaScript</li>
          <li>Transpilation of code from ES6 to ES5</li>
          <li>Gulp watch task, to monitor files for changes and automatically bundle the code during development</li>
          <li>Fast JavaScript bundling, using <em>watchify</em> together with <em>browserify</em></li>
          <li>Example of client side localization</li>
          <li>Example of integration with the Bootstrap components</li>
          <li>Strategy to organize the source code (both JavaScript and LESS), into logical areas</li>
          <li>Gulp task to compile the LESS code into CSS</li>
          <li>Example of client side routing, using react-router</li>
          <li>Example of strategy to display preloaders and error panels</li>
          <li>Example of React components definition, defined using ES6 class</li>
          <li>Application wise, declarative and asynchronous forms validation strategy</li>
        </ol>
      </div>);
  }
}

export default Dashboard;