import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavList extends Component {

  render() {
    return (
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link mr-2" to="/user">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link mr-2" to="/user/dashboard">Dashboard</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link mr-2" to="/user/friends">Social Media</NavLink>
          </li>

          <li className="nav-item">
            <div className="nav-link mr-2" to="/Start">
              <button className="btn btn-sm btn-warning"
                      >Log Out</button>
            </div>
          </li>
        </ul>
      </div>

    );
  }
}
