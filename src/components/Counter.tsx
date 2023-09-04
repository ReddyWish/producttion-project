import React, { useState } from 'react';
import classes from "./Counter.module.scss"

function Counter() {
  const [count, setCount] = useState(0)
  return (
        <div className={classes.btn}>
          <div>{count}</div>
          <button onClick={() => setCount(prevState => prevState + 1)}>increment</button>
          <button onClick={() => setCount(prevState => prevState - 1)}>decrement</button>
        </div>

  );
}

export default Counter;