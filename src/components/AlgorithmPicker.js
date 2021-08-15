import React from 'react'
import AlgorithmSteps from './AlgorithmSteps'
import { connectionAlert } from '../misc/helpers'
const AlgorithmPicker = ({handleAlgorithmSelect,sortingOptions,updateSortedSteps,sortingMethod}) => {
  return (
    <div className="algorithm-picker">
      <h3>Select a Sorting Algorithm</h3>
      <select value={sortingMethod} onChange={(evt) => handleAlgorithmSelect(evt)}>
        {sortingOptions.map((value, index) => {
          return <option key={index} value={value}>{value}</option>
        })}
      </select>

      {/* switch future 'render steps' state to on */}
      <button onClick={() => connectionAlert()}>Sort Data</button>
        <AlgorithmSteps sortingMethod={sortingMethod}/>
    </div>
  )
}

export default AlgorithmPicker
