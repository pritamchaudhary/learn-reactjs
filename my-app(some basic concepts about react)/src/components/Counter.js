import React, { useState } from "react";

function Counter() {
    const[number, setNumber] = useState(0);
    function handleClick(e) {
        e.stopPropagation();
        setNumber(number+1);
        console.log(number);
    }
  return (
    <>
      <h1 style={{color:'whilte'}}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
