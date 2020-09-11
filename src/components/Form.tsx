import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div style={{ margin: "0 20px" }}>
        <input type="text" />
        <br />
        <br />
        <select defaultValue="lime">
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <br />
        <br />
        <div>
          <input defaultChecked type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
      </div>
    );
  }
}
