import React, { Component } from 'react'
import { MyContext } from './Context';

class CounterDisplay extends Component {
  render() {
    const { increment, decrement, counter } = this.context;
    return (
      <div>
        <button onClick={increment}>+</button>
        <p>{counter}</p>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

CounterDisplay.contextType = MyContext;

export default CounterDisplay;