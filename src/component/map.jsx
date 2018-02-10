import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {

    return (
    <div><h1>this is a map</h1>
    </div>
    )
  }
}