import React from 'react'
import SortStep from './SortStep'

function SortingSteps({ sortedSteps }) {
  return (
    <ul id="processedData">
      {sortedSteps.map((step, index) => {
        return (
          <SortStep key={index} data={step} />
        )
      })}
    </ul>
  )
}

export default SortingSteps
