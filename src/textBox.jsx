import React from "react";

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Name: </label>
        <input type="text" value={this.props.name} />
      </div>
    );
  }
}
