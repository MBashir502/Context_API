import React from "react";
import DataState from "./context/DataContext/DataState";
import Component5 from "./components/Component5";

const App = () => {
  return (
    <DataState>
      <div>
        <h1>App</h1>
        <Component5 />
      </div>
    </DataState>
  );
};

export default App;
