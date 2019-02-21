import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';


export default class NavList extends Component {
  constructor(props) {
    super(props);
    this.state= {logout: false};
    this.changeLogout = this.changeLogout.bind(this);
  }

  changeLogout(ev) {
    this.setState ({logout: true})
  }

  componentWillUnmount() {
    this.props.unauthorize();
  }

  render() {
    return (
      <>
      <div className="container">
        <ul className="nav my-4">
          <li className="nav-item">
            <NavLink to="/user" className="nav-link">Main</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/friends" className="nav-link">Your Friends</NavLink>
          </li>
          <li className="nav-item float-right">
            <button className="btn btn-danger btn-sm" onClick={this.changeLogout}>Sign Out</button>
          </li>
        </ul>
        {this.state.logout && <Redirect to="/logout" />}
      </div>
      </>
    )
  }
}

// NavLinks are going to change our url at that is descisive!!!
