import React, { Component, PropTypes as RPT } from 'react';
import { bindActionCreators } from 'redux';
import Counter from './Counter';
import { connect } from 'react-redux';
import { incrementCounter as increment } from './actionCreators';

class CounterPage extends Component {
  static propTypes = {
    counter: RPT.number.isRequired,
    increment: RPT.func.isRequired,
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.props.increment}
      />
    );
  }
}

export default connect(
  state => ({ counter: state.counter }),
  dispatch => ({ increment: bindActionCreators(increment, dispatch) })
)(CounterPage);
