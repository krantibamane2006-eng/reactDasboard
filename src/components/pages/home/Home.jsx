import React from 'react'
import { useState } from 'react';

const Home = () => {
  const getAlert=()=>{
    alert("Button was Clicked");
  }
const[number,setNumber]=useState(0)
const increment=()=>{
  setNumber(number+1);
}
const decrement =()=>{
  //setNumber(number-1);
  if (number>0){
    setNumber(number-1);
  }
}

  return (
    <>
   
      <button onClick={getAlert}>Click Me</button>
    

       <button onClick={increment}>Increment</button>
       <h1>Number:{number}</h1>
       <button onClick={decrement}>Decrement</button>

    </>
  )
}

export default Home
