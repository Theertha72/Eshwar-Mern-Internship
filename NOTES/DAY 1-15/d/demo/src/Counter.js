import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(100);
  function increment(){
    setCount(count + 1);
  };
  function decrement(){
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;