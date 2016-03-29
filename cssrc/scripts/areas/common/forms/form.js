/**
 * Reusable form component, with validation strategy implemented using DataEntry
 * - Roberto Prevato
 */
import React from "react"
import ReactDOM from "react-dom"

class Form extends React.Component {

  // The following two methods are the only places we need to
  // integrate Bootstrap or jQuery with the components lifecycle methods.
  componentDidMount() {
    // When the component is added, initialize a dataentry
    this.initializeDataEntry();
  }

  componentWillUnmount() {
    this.destroyDataEntry();
  }

  initializeDataEntry() {
    var node = ReactDOM.findDOMNode(this);

    var self = this, state = self.state;
    if (!state)
      throw new Error("missing component state. cannot define a dataentry without a schema.");
    var schema = state.schema;
    if (!schema)
      throw new Error("missing schema definition inside the model. cannot define a dataentry without a schema.");

    //add reference to the dataentry business logic to the model
    self.dataentry = new Forms.DataEntry({
      element: node,
      schema: schema,
      context: self
    });
    //extend the model with proxy functions
    _.extend(self, {
      validate: function (params) {
        return this.dataentry.validate(params);
      }
    });
  }

  destroyDataEntry() {
    var dataentry = this.dataentry;
    dataentry.dispose();
    this.dataentry = null;
  }

}

export default Form;
