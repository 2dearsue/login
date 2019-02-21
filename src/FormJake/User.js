import React, { Component } from 'react';
import NavList from './NavList';
import { Route } from 'react-router-dom';

export default class UserPage extends Component {
  render() {

    return (
      <div className="container my-4">
      <NavList unauthorize={this.props.unauthorize}/>
        <div className="jumbotron">
          <Route exact path="/user" render={ () => <h2> Hello {this.props.userName} </h2> } />
          <Route path="/user/dashboard" render={ () => <h2> Hey {this.props.userName} this is your dashboard </h2>} />
          <Route path="/user/friends" render={ () => <h2> Hey {this.props.userName} your friends are here </h2>} />
        </div>
      </div>
    )
  }
}
