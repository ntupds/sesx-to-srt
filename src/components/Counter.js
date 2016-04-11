import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <div>
        <p>{counter}</p>
        <button onClick={increment}>
          plus
        </button>
        <button onClick={decrement}>
          minus
        </button>
      </div>
    );
  }
};
