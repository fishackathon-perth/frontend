import React from 'react';
import PropTypes from 'prop-types';

export default class Logon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`submitted ${this.state}`);
    this.props.onSubmit(this.state);
  }

  render() {

    return (
    <div className="form">
      <form className="login-form">
        <input type="text" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}/>
        <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <button onClick={this.handleSubmit}>login</button>
      </form>
    </div>
    )
  }
}

Logon.propTypes = {
  onSubmit: PropTypes.func
}