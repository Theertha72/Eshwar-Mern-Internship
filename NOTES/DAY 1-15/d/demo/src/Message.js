import React, { useState } from "react";
const App = () => {
    const [message, setmessage] = useState('Click the bitton to see the message')
    const handleClick = () => {
        setmessage('Hello ,You clicked the button')
    };
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};
export default App;