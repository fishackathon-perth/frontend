import React from 'react';

export default class EquipmentList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div><hr>
        <ul className="list-group">
          <li>one</li>
          <li>two</li>
          </ul>
      </div>

    )
  }
}