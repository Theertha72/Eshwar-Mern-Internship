import React, { useState } from "react";

function Calculation() {
  const [number1, setNumber1] = useState(""); 
  const [number2, setNumber2] = useState(""); 
  const [result, setResult] = useState(""); 


  function handleAdd  (event)  {
     setNumber1(event.target.value);
    setResult(Number(number1) + Number(number2));
  };


  function handleSub  (event)  {
    setNumber2(event.target.value);
    setResult(Number(number1) - Number(number2));
  };

  return (
    <div>
      <form>
        <div>
          <label>Enter number 1:</label>
          <input
            type="number"
            value={number1}
            onChange={handleAdd}
          />
        </div>

        <div>
          <label>Enter number 2:</label>
          <input
            type="number"
            value={number2}
            onChange={handleSub}
          />
        </div>

        <div>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSub}>Subtract</button>
        </div>
      </form>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculation;
