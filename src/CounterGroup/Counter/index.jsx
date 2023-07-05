import React, { Component } from 'react';
import './style.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + this.props.value
    }));
    this.props.onTotalChange(this.props.value);
  };

  handleDecrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - this.props.value
    }));
    this.props.onTotalChange(-this.props.value);
  };

  render() {
    return (
      <div className="counter">
        <button className="decreaseButton" onClick={this.handleDecrease}>-</button>
        <span className="counterValue">{this.state.counter}</span>
        <button className="increaseButton" onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default Counter;
