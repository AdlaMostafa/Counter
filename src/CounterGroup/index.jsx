import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterGroup extends Component {
  state = {
    total: 0
  };

  handleTotalChange = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value
    }));
  };

  render() {
    return (
      <div>
        <Counter value={1} onTotalChange={this.handleTotalChange} />
        <Counter value={2} onTotalChange={this.handleTotalChange} />
        <Counter value={3} onTotalChange={this.handleTotalChange} />
        <div className='total'>Total: {this.state.total}</div>
      </div>
    );
  }
}
