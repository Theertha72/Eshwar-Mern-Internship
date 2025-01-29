import React,{useState} from 'react'
import { Child1 } from './Child2'

export const Parent1 = () => {

    const [parent_message, setParentMessage] = useState("Hello from Parent");
    const [ child_message, setChildMessage] = useState('hai');

    const datafromchildd = (message) => {
        setChildMessage(message);
    }

  return (
    <div>
        <h1>Parent component</h1>
        <p>Data from Parent: {parent_message}</p>
        <p>Data from Child: {child_message}</p>
        <Child1 msg={parent_message} datatoparent={datafromchildd} />
    </div>
  )
}
export default Parent1;