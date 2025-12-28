import React, { Component } from 'react'//rce
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
export class Navbar extends Component {

  static defaultProps = {title:"News24Daily"}
  static propTypes = {title:PropTypes.string}

  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">{this.props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                  <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                  <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                  <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                  <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                  <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
      )
  }
}

export default Navbar
