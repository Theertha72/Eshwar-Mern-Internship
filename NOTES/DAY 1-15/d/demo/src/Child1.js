import React, { useState } from'react';
import Parent2 from './Parent2';

function Child2() {
    const [Message, setMessage] = useState("Hello from Child");
    const handleClick = () => {
        setMessage("Hello from Child");
        Parent2.handleClick();
    };  

    return (
    <div>
        <h1>I am Child Component</h1>
        <button onClick={handleClick}>Click me</button>
        <p>{Message}</p>
        <Parent2 />
        
    </div>
    )
}

export default Child2;