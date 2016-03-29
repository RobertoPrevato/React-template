/**
 * Example of form with validation strategy implemented using jQuery-DataEntry
 *
 * - Roberto Prevato
 */
import React from "react"
import ReactDOM from "react-dom"
import BaseForm from "../common/forms/form"

class FormExample extends BaseForm {

  constructor(props) {
    super(props);
    //initial state:
    this.state = {
      //validation schema:
      schema: {
        name: {
          validation: ["required"],
          format: ["cleanSpaces"]
        },
        year: {
          validation: ["required", { name: "integer", params: [{ min: 1900, max: 2015 }] }]
        },
        "only-letters": {
          validation: ["letters"]
        },
        "policy-read": {
          validation: ["mustCheck"]
        }
      }
    };
  }

  save(e) {
    e.preventDefault();
    this.validate().then(function (data) {
      if (data.valid)
        alert("The form is valid!");
    }, function () {
      //an exception happened while applying validation logic
      //TODO: handle this situation
    });
    return false;
  }

  render() {
    return (
      <div>
        <h1>Form example, with global validation strategy</h1>
        <form id="example-form" method="post" action="?" action="?" autoComplete="off">
          <fieldset>
            <legend>Example form (data is not submitted anywhere!)</legend>
            <label htmlFor="name-field">Username</label>
            <input id="name-field" type="text" name="name" /><br />

            <label htmlFor="year-field">Year (between 1900 and 2015)</label>
            <input id="year-field" type="text" name="year" /><br />

            <label htmlFor="only-letters">A field that is not required, but accepts only letters</label>
            <input id="only-letters" type="text" name="only-letters" /><br />

            <label htmlFor="must-check" className="inline">A checkbox that must be checked (policy acceptance)</label>
            <input id="must-check" type="checkbox" name="policy-read" /><br />
          </fieldset>
          <fieldset className="buttons">
            <button className="submit btn" onClick={this.save.bind(this)}>{I.t("voc.Submit")}</button>
          </fieldset>
        </form>
        <hr />
        <ul>
          <li><a href="https://github.com/RobertoPrevato/jQuery-DataEntry">Validation plugin source code</a></li>
          <li>Demo built using <a href="http://getbootstrap.com/">Bootstrap</a> and Icons from <a href="http://glyphicons.com/">Glyphicons</a>.</li>
        </ul>
      </div>);
  }
}

export default FormExample;
