import React from "react";

class Components2 extends React.Component {
  render() {
    return <h3>Nice to meet you</h3>;
  }
}

function Components() {
  return (
    <div className="Components">
      <Components2 />
    </div>
  );
}

export default Components;
