import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  // .setState()를 호출할 때마다 새로운 state로 다시 render
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
