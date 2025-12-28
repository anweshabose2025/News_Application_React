import React, { Component } from 'react'
import spinner from '../Skateboarding-spinner.gif';

export class Spinner extends Component {
  render() {
    return (
      <div>
        <center><img src={spinner} alt="loading"></img></center>
      </div>
    )
  }
}

export default Spinner
