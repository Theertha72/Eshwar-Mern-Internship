import React, { useReducer } from 'react';

const colors = {
    V: 'violet',
    I: 'indigo',
    B: 'blue',
    G: 'green',
    Y: 'yellow',
    O: 'orange',
    R: 'red',
};

const colorReducer = (state, action) => {
    switch (action.type) {
        case 'V':
            return colors.V;
        case 'I':
            return colors.I;
        case 'B':
            return colors.B;
        case 'G':
            return colors.G;
        case 'Y':
            return colors.Y;
        case 'O':
            return colors.O;
        case 'R':
            return colors.R;
        default:
            return 'white';
    }
};

const Rainbow = () => {
    const [state, dispatch] = useReducer(colorReducer, 'white');

    const handleColorChange = () => {
        const input = prompt("Choose a color letter from VIBGYOR:").toUpperCase();
        if (colors[input]) {
            dispatch({ type: input });
        } else {
            alert("Invalid input! Please enter a letter from VIBGYOR.");
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div id='clr' style={{ width: '200px', height: '50px', backgroundColor: state, margin: 'auto', border: '1px solid black'}}>
            </div>
            <button onClick={handleColorChange} style={{ padding: '10px', marginTop: '20px', fontSize: '16px' }}>Choose Color</button>
        </div>
    );
};

export default Rainbow;