import React, { useState } from'react';
import Child2 from './Child2';

function Parent2() {
  const [Message, setMessage] = useState("Hello from Parent");
  const [Child, setChild] = useState(null);

  const handleClick = () => {
    setMessage("Hello from Parent");
    setChild(<Child2 />);
  };

  return (
    <div>
        <h1>I am Parent Component.</h1>
        <button onClick={handleClick}>Click me to change child component</button>
        {Child}
        <h2>{Message}</h2>
        <Child2 />
        
    </div>
    );  
}

export default Parent2;