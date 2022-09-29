import React from "react";

class Components2 extends React.Component {
  render() {
    return <h3>Nice to meet you</h3>;
  }
}

const Components3 = () => {
  return <h2>Have a nice week</h2>;
};

class Components4 extends React.Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <p>
        Component Counter 1: {this.state.counter}
        <button onClick={this.increment}>Add-1</button>
      </p>
    );
  }
}

function Components() {
  return (
    <div className="Components">
      <Components2 />
      <Components3 />
      <Components4 />
    </div>
  );
}

export default Components;
