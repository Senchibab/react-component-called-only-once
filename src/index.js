import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", time: new Date() };

    console.log("Constructor");
  }
  update = e => {
    this.setState({ name: e.target.value });
  };

  componentDidMount() {
    this.intervalid = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
    console.log("did mount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <input value={this.state.name} onChange={this.update} />
        <h1>Current Time is {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
var time = new Date();
ReactDOM.render(<App />, document.getElementById("root"));
