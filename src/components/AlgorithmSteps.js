import React from 'react'
import BubbleSteps from './BubbleSteps'

const AlgorithmSteps = ({ sortingMethod }) => {




  return (
    <div className="algorithm-steps">
      <h3>Our {sortingMethod} algorithm looks like this</h3>
      {sortingMethod === "bubble sort" && <BubbleSteps/>}


    </div>
  )
}

export default AlgorithmSteps
