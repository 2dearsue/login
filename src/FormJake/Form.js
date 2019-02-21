import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Form extends Component {
 render() {
   return (
     <>
       <h2 className="title text-success text-center my-4">Welcome to our starting Page</h2>
       <div className="container my-4">
         <div className="jumbotron">
           <form className="text-center" onSubmit={this.props.formProps.handleSubmit}>
             <div className="input-group mb-3 input-group-lg">
                <div className="input-group-prepend">
                  <span className="input-group-text">Username</span>
               </div>
               <input onChange={this.props.formProps.handleChange} type="text" className="form-control" ident="usr" value={this.props.formProps.userName}/>
             </div>
             <div className="input-group mb-3 input-group-lg">
                <div className="input-group-prepend">
                  <span className="input-group-text">Password</span>
               </div>
               <input onChange={this.props.formProps.handleChange} type="password" className="form-control" ident="pwd" value={this.props.formProps.password}/>
             </div>
             <button type="submit" className="btn btn-dark btn-lg">Log in</button>
           </form>
           {this.props.formProps.hasFailed && <div className="alert alert-danger my-4">You have entered the wrong password or username. Please try again!</div>}
         </div>
       </div>
     </>

   )
 }
}
