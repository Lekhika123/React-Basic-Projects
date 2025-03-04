import { useState } from 'react'
import './App.css'

function App() {
  // let counter=5;
  let [counter,setCounter]=useState(15);
  const addValue=()=>{
      
      setCounter(counter+1);
      // if we want to perform multiple updation
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      //  above three will result in single update only because counter is same in all three and changes are send in batches
      // to ensure next update after first update completed use following
      // setCounter((prevCounter)=>prevCounter+1);//prevCounter is last updated value of counter
      //or
      //setCounter(prevCounter=>prevCounter+1);
      console.log("clicked Added" ,counter);
      
  }
  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter);
    console.log("clicked removed",counter);
    
}

  return (
    <>
      <h1>Project Counter:Learning hooks</h1>
      <h3>{counter}</h3>
      <button onClick={addValue}>Add Value:{counter}</button><br></br>
      <button onClick={removeValue}>Remove value:{counter}</button>

    </>
  )
}

export default App
