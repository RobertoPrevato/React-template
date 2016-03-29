/**
 * Reusable preloader component.
 */
import React from "react";

class Preloader extends React.Component {
  
  render() {
    return (<div className="preloader-mask">
              <div className="preloader-icon"></div>
            </div>);
  }
}

export default Preloader;