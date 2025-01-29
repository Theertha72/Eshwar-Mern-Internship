import React,{useState} from 'react'

export const Child1 = (props, data_for_parent_from_child) => {

    const [child_message, setChildMessage] = useState("Hello from Child");

    const send_message = () => {
        props.datatoparent(child_message);
    }

  return (
    <div>
        <h1>Child component</h1>
        <p>Data from Parent: {props.msg}</p>
        <button onClick={send_message}>Send Data to Parent</button>
    </div>
  )
}

export default Child1;