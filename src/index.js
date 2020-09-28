import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    console.log("Constructor");
  }
  update = e => {
    this.setState({ name: e.target.value });
  };

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input value={this.state.name} onChange={this.update} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
