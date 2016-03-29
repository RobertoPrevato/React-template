/**
 * Hello World example, showing an working example of:
 * 1. simulation of delay for an ajax call (using setTimeout, and changing the model state)
 * 2. strategy to implement preloaders and error panels that allow the user to retry loading something.
 * 3. click handler, bound to the model
 *
 * - Roberto Prevato
 */
import React from "react";
import Preloader from "../common/preloader";
import ErrorPanel from "../common/error-panel";

let k = 0;//this variable is just used to simulate the first failure of an ajax request (to display an error panel)

class HelloWorld extends React.Component {

  constructor(props) {
    super(props);

    //initial state:
    this.state = {
      k: 0,
      loading: true,
      error: void(0)
    };
    this.load();
  }

  load() {
    //simulate ajax call, that takes 2 seconds to complete:
    var self = this;
    if (!self.state.loading) {
      //first call
      self.setState({
        loading: true,
        error: void(0)
      });
    }
    //
    //the delay simulates the delay of an ajax call (to demonstrate the strategy to display preloaders)
    //
    _.delay(function () {
      
      //simulate an error happening during an ajax call:
      //offering the client to try again
      if (k < 1) {
        k++;
        self.setState({
          error: {
            title: I.t("errors.TechnicalError"),
            message: I.t("errors.Example")//errors.LoadingData
          },
          loading: false
        });
        return;
      }
      
      self.setState({
        loading: false
      });
    }, 500);
  }
  
  onClick() {
    var k = this.state.k;
    this.setState({ k: k+1 });
  }

  render() {
    var state = this.state, k = state.k;

    //handle loading and error states:
    if (state.loading) {
      return <Preloader />;
    }
    var err = state.error;
    if (err) {
      //do we want to add retry?
      return <ErrorPanel title={err.title} message={err.message} retry={this.load.bind(this)} />;
    }
    
    return (<div>
              <h1>Hello, World!</h1>
              <h2>{this.state.k}</h2>
              <button className="btn btn-primary" onClick={this.onClick.bind(this)}>{I.t("voc.ClickMe")}</button>
             </div>);
  }
}

HelloWorld.propTypes = {

};
//NB: properties (.props) are immutable
HelloWorld.defaultProps = {

};

export default HelloWorld;
