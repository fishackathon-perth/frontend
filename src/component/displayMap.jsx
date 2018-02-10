import React from 'react';

import Map from './map'
import EquipmentList from './equipmentList'

function displayMap() {
  return (
    <div>
      <div><Map /></div>
      <div><EquipmentList /></div>
    </div>
  )
}

export default displayMap;