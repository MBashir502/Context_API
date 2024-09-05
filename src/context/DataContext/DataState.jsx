import React, { useState } from "react";
import DataContext from "./DataContext";
const DataState = (props) => {
  const obj = {
    id: 502,
    name: "Muhammad Bashir",
    city: "Lahore, Pakistan",
  };
  const [counter, setCounter] = useState(0);
  return (
    <DataContext.Provider value={{ obj, counter, setCounter }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
