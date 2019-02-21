import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Form';
import UserPage from './User';
import Logout from './Logout';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     userName: '',
     password: '',
     hasFailed: false,
     isAuth: false};
   this.changeFormField = this.changeFormField.bind(this); // only bind functions!!!!
   this.handleSubmit = this.handleSubmit.bind(this);
   this.unauthorize = this.unauthorize.bind(this);
   this.resetFields = this.resetFields.bind(this);
 }

 changeFormField(event) {
   switch(event.target.getAttribute('ident')) {
     case 'usr' :
       this.setState({userName: event.target.value});
       break;
     case 'pwd' :
       this.setState({password: event.target.value});
       break;
   }
 }

 handleSubmit(event) {
   event.preventDefault();
   if (this.state.userName === 'Jake' && this.state.password === 'djarte023') {
     this.setState({hasFailed: false, isAuth: true});
     console.log('You are logged in');
   } else {
     this.setState({hasFailed: true});
     console.log('you failed')
   }
 }

 unauthorize(event) {
   this.setState({isAuth: false});
 }

 resetFields() {
   this.setState({userName:'', password:''})
 }

 render() {
   const formProps = {
     userName: this.state.userName,
     password: this.state.password,
     handleChange: this.changeFormField,
     handleSubmit: this.handleSubmit,
     hasFailed: this.state.hasFailed
   };

   return (
    <BrowserRouter>
      <>
          <Route exact path="/" render= {() => <Form formProps = {formProps}/> } />
          <Route path="/logout" render= {() => <Logout resetFields={this.resetFields}/> } />
        <Switch>
          <Route path="/user" render= {() => <UserPage userName={this.state.userName} unauthorize={this.unauthorize}/> } />
          {this.state.isAuth && <Redirect to="/user" />}
        </Switch>
      </>
    </BrowserRouter>
   )
 }
}
