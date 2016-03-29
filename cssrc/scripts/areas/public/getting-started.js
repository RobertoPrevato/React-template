/**
 * Getting started view.
 *
 * - Roberto Prevato
 */
import React from "react"

class GettingStarted extends React.Component {
  render() {
    return (
      <div>
        <h1>Getting started</h1>
        <p>This demo requires:</p>
        <ol>
          <li>NodeJs and its npm (included in NodeJs installers)</li>
          <li>The Gulp task runner (install with command: npm install -g gulp-cli)</li>
          <li>Run a development server
            <p>One of these options is recommended:</p>
            <ol>
              <li>Python development server (requires Python 3 installed)<br />
                <em>py 3 -m http.server 44660 (under Windows)</em><br />
                <em>python3 -m http.server 44660 (under Linux)</em>
              </li>
              <li>NodeJs development server</li>
            </ol>
          </li>
          <li>Run the server, in such a way to serve the files contained in the `httpdocs` folder.</li>
        </ol>
      </div>);
  }
}

export default GettingStarted;
