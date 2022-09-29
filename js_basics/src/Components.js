import React from "react";

class Components2 extends React.Component {
  render() {
    return <h3>Nice to meet you</h3>;
  }
}

const Components3 = () => {
  return <h2>Have a nice week</h2>;
};

function Components() {
  return (
    <div className="Components">
      <Components2 />
      <Components3 />
    </div>
  );
}

export default Components;
