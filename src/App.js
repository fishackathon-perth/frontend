import React, { Component } from 'react';
import './App.css';
import Logon from './component/logon'

class App extends Component {
  state = {
    response: '',
    isLoggedIn: false
  };

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
  };

  callApi = async() => {
    const response = await fetch('http://localhost:5000/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleLogonSubmit(){
    this.setState({ isLoggedIn: true });
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let loginForm = null;
    if(!isLoggedIn){ loginForm = <Logon onSubmit={this.handleLogonSubmit}/> }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fishackathon</h1>
        </header>
        <p className="App-intro">
          { this.state.response }
        </p>
         {loginForm}
      </div>
    );
  }
}

export default App;
