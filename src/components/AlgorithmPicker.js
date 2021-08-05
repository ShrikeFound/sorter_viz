import React from 'react'

const AlgorithmPicker = (props) => {

  return (
    <div className="algorithm-picker">
      <h3>Select a Sorting Algorithm</h3>
      <select value={props.sortingMethod} onChange={(evt) => props.handleChange(evt)}>
        {props.sortingOptions.map((value, index) => {
          return <option key={index} value={value}>{value}</option>
        })}
      </select>
      {/* switch future 'render steps' state to on */}
      <button onClick={() => props.updateSortedSteps("test")}>Sort Data</button>
    </div>
  )
}

export default AlgorithmPicker
