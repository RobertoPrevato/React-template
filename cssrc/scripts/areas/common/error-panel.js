/**
 * Reusable error panel component.
 */
import React from "react";

class ErrorPanel extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  onClick() {
    var retry = this.props.retry;
    retry();
  }
  
  render() {
    var state = this.state, props = this.props;
    var title = props.title;
    var message = props.message;
    var retry = props.retry ? <button className="btn" onClick={this.onClick.bind(this)}>{I.t("voc.TryAgain")}</button> : "";
    
    return (<div className="main-error">
              <div className="alert alert-danger">
                <h2>{title}</h2>
                <p>{message}</p>
                {retry}
              </div>
            </div>);
  }
}

export default ErrorPanel;