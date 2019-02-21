import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavList from '../NavList/NavList';

export default class User extends Component {

  render() {
    return (
        <>
          <NavList />

          <div className="container text-center">
            <div className="jumbotron">

            <Route exact path="/user"render={() => <h2 className="display-1 text-center">Welcome, {this.props.userName}</h2>} />
            <Route path="/user/dashboard" render= {() => <h2 className="mt-3 text-center display-5">This is your Dashboard, {this.props.userName} !</h2>} />
            <Route path="/user/friends" render= {() => <h2 className="mt-3 text-center display-5">This is your Social Media Area, {this.props.userName} !</h2>} />

            </div>
          </div>
        </>
    );
  }
}
