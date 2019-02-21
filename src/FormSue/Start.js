import React, { Component } from 'react';

export default class Start extends Component {

  render() {
    return (

        <>
          <h2 className="header mt-3 text-center display-4">Welcome to our starting Page</h2>
          <div className="container text-center">
            <form className="jumbotron"
                  onSubmit={this.props.submitLogin}>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Username</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username"
                          onChange={this.props.updateName}
                           />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Password</span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password"
                          onChange={this.props.updatePassword}
                           />
                </div>

              <button
                  type="submit"
                  className="btn btn-dark btn-lg"
              > Submit
              </button>

            </form>
          </div>
        </>

    );
  }
}
