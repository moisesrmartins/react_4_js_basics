import React from "react";
import Header from "./Header";
import Table from "./Create/Element/Table.js";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>START</h1>
      </div>

      <div>
        <Header />
        <Table />
      </div>
    </div>
  );
};

export default App;
