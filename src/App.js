import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logon from './component/logon'

class App extends Component {
  state = {
    response: ''
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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fishackathon</h1>
        </header>
        <p className="App-intro">
          { this.state.response }
        </p>
        <Logon />
      </div>
    );
  }
}

export default App;
