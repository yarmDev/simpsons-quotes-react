// Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on
          };
      }
      handleClick = () => {
        console.log('Button clicked');
        this.setState({ on: !this.state.on });
      };
  render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button className={light} onClick={this.handleClick}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;