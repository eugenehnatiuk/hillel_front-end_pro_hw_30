import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue,
    };
  }
  componentDidMount() {
    console.log('Mount complited');
  }
  componentDidUpdate() {
    console.log('Updated');
  }

  increment = () =>
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(`The counter was incrised to: ${this.state.count}`);
      }
    ); // первым аргументом передали прошлое состояние, второй аргумент меняет state, третий -- callback любой.

  decrement = () =>
    this.setState(
      (prevState) => ({
        count: prevState.count - 1,
      }),
      () => {
        console.log(`The counter was decrised to: ${this.state.count}`);
      }
    );

  reset = () =>
    this.setState({ count: 0, countClass: 'main-section__count' }, () => {
      console.log(`The counter was reseted to: ${this.state.count}`);
    });

  render = () => {
    const { count } = this.state;
    const countClassUnderZero =
      count < 0 ? 'main-section__count--zero' : 'main-section__count';

    return (
      <div className={this.props.className}>
        <p className="main-section__title">Simple Counter on React</p>
        <div className="main-section__counter">
          <button
            className="main-section__decrement"
            onClick={this.decrement} // or onClick={(event) => this.decrement()}
          >
            -
          </button>
          <span className={countClassUnderZero}>{count}</span>
          <button className="main-section__increment" onClick={this.increment}>
            +
          </button>
        </div>
        <button className="main-section__reset-btn" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  };
}

export default Counter;
