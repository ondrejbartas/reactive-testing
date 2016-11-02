import React, { Component, PropTypes as RPT } from 'react';

export default class Counter extends Component {
  static propTypes = {
    counter: RPT.number.isRequired,
    increment: RPT.func.isRequired,
  }

  getSquare() {
    return this.props.counter * this.props.counter;
  }

  render() {
    return (
      <div>
        Counter: {this.props.counter}
        <button onClick={this.props.increment}> +1 </button>
      </div>
    );
  }
}
