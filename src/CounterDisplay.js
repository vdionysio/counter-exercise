import React, { Component } from 'react'
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from './actions';

class CounterDisplay extends Component {
  render() {
    const { countNumber, decrement, increment} = this.props;
    return (
      <div>
        <button onClick={increment}>+</button>
        <p>{countNumber}</p>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  countNumber: state.counterReducer,
});

const mapDispatchToProps = (dispatch) => ({ 
  decrement: (state) => dispatch(decrementCounter(state)),
  increment: (state) => dispatch(incrementCounter(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);