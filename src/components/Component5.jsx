import React, { useContext } from "react";
import dataContext from "../context/DataContext/DataContext";

const Component5 = () => {
  const pak = useContext(dataContext);
  console.log(pak);
  return (
    <div>
      <h1>
        I am {pak.obj.name} from {pak.obj.city}
      </h1>
      <h1>{pak.counter}</h1>
      <button onClick={() => pak.setCounter(pak.counter + 1)}>
        Increse Value
      </button>
    </div>
  );
};

export default Component5;
