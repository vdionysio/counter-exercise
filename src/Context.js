import React, { Component, createContext } from 'react'

export const MyContext = createContext();

class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  }

  decrement() {
    this.setState((prev) => ({ counter: prev.counter - 1 }));
  }

  render() {
    const { children } = this.props;
    const { counter } = this.state;
    const contextValue = {
      counter,
      increment: this.increment,
      decrement: this.decrement }
    return (
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    )
  }
}

export default Context
