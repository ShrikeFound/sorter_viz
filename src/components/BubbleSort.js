import React, { useState, useEffect } from 'react'
import SortStep from './SortStep'

const BubbleSort = (props) => {
  const [steps, setSteps] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [refresh, setRefresh] = useState(0)

  const bubbleSortArray = arr => {
    console.log(arr)
    const initialArray = new Array(...arr)
    const sortingSteps = []

    for (let i = 0; i < initialArray.length; i++) {
      for (let j = 0; j < initialArray.length - i - 1; j++) {
        sortingSteps.push([...initialArray])
        // console.log(sortingSteps)
        if (initialArray[j] > initialArray[j + 1]) {
          [initialArray[j], initialArray[j + 1]] = [initialArray[j + 1], initialArray[j]]
        }
      }
    }

    setSteps(sortingSteps)
    console.log(steps)

    return initialArray
  }

  // const sortedArray = bubbleSortArray(props.data)

  useEffect(() => {
    setSortedData(bubbleSortArray(props.data))
  }
    , [refresh])

  return (
    <>
      <ul id="processedData">
        {steps.map((step, index) => {
          return (
            <SortStep key={index} data={step} />
          )
        })}
      </ul>
      <li>
        Our fully sorted data:
        {sortedData.map((value, key) => {
          <SortStep key={key} data={value} />
        })}
      </li>
    </>
  )
}

export default BubbleSort
