import React, { Component } from 'react'


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <small id="account">Logged in as: {this.props.account}</small>
      </nav>
    );
  }
}

export default Navbar;