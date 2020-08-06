import React from "react";
import { useQuery } from "@apollo/client";
import { currentCounterVar, GET_COUNTER } from "./cache";

const App = () => {
  const { data } = useQuery(GET_COUNTER);

  const increment = () => {
    const currentCounter = currentCounterVar();
    currentCounterVar(currentCounter + 1);
  };

  const decrement = () => {
    const currentCounter = currentCounterVar();
    currentCounterVar(currentCounter - 1);
  };
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Current Counter Variable: {data.counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default App;
