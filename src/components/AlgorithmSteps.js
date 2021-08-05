import React from 'react'
import BubbleSort from './BubbleSort'

const AlgorithmSteps = ({ initialData, updateSortedSteps, sortedSteps }) => {
  return (
    <div className="algorithm-steps">
      <h3>Algorithm steps displayed here</h3>
      <ul>

        <li>
          Our bubble-sort algorithm looks like this:
        </li>
        <li>
          for i -> 0 to arrayLength
        </li>
        <li>
          for j -> 0 to (arrayLength - i - 1)
        </li>
        <li>
          if arr[j] > arr[j + 1]
        </li>
        <li>
          swap(arr[j], arr[j + 1])
        </li>
        <li>
          So our steps for processing data looks like this:
        </li>
      </ul>


      <BubbleSort data={initialData} updateSortedSteps={updateSortedSteps} sortedSteps={sortedSteps} />
    </div>
  )
}

export default AlgorithmSteps
