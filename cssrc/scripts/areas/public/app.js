/**
 * Main public area view: the one containing the navigation menu.
 *
 * - Roberto Prevato
 */
import React from "react"
import BootstrapLink from "../common/bootstrap-link"

class App extends React.Component {
  render() {
    var props = this.props, cl = props.location.pathname;
    return (
    <div>
      <ul id="main-menu" className="nav nav-pills nav-stacked">
        <BootstrapLink href="/" currentLocation={cl} text={I.t("menu.Dashboard")} />
        <BootstrapLink href="/hello-world" currentLocation={cl} text={I.t("menu.HelloWorld")} />
        <BootstrapLink href="/getting-started" currentLocation={cl} text={I.t("menu.GettingStarted")} />
        <BootstrapLink href="/form" currentLocation={cl} text={I.t("menu.FormExample")} />
        <BootstrapLink href="/about" currentLocation={cl} text={I.t("menu.About")} />
      </ul>
      <div id="partial-view">
        {this.props.children}
      </div>
    </div>)
  }
}

export default App;