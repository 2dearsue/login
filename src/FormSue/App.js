import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Start from '../Start/Start';
import User from '../UserPage/User';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.state = {
      userName: '',
      userPassword: '',
      authOk: false,
      authError:false};
  }

  updateName(event) {
    this.setState({userName: event.target.value})
  }

  updatePassword(event) {
    this.setState({userPassword: event.target.value})
  }

  submitLogin(event) {
    event.preventDefault();

    if(this.state.userName === 'sue' && this.state.userPassword === 'boom') {
      this.setState({authOk: true, authError:false});

    } else {
      this.setState({authOk: false, authError:true});
    }
  }

  render() {
    return (
      <BrowserRouter>
        <>
            <Route exact path="/" render={() => <Start submitLogin={this.submitLogin} updateName={this.updateName} updatePassword={this.updatePassword} />} />

          <Switch>
            <Route path = "/user" render= {() => <User userName={this.state.userName}/> } />
            {this.state.authOk && <Redirect to = '/user' />}
          </Switch>

          {this.state.authError && <p className="alert alert-warning"> Username or password are incorrect. Try again!</p>}
        </>
      </BrowserRouter>
    );
  }
}
