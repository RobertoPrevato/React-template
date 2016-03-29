/**
 * Reusable Bootstrap nav link component.
 */

import React from "react"

class BootstrapLink extends React.Component {

  constructor(props) {
    super(props||{});
  }

  render() {
    var props = this.props,
      href = props.href,
      text = props.text,
      currentLocation = props.currentLocation,
      active = currentLocation == href;

    if (href[0] != "#") href = "#" + href;
    return (<li className={active ? "active" : ""}>
      <a href={href}>{text}</a>
    </li>);
  }
}

export default BootstrapLink;