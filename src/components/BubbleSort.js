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

    return initialArray
  }

  // const sortedArray = bubbleSortArray(props.data)

  useEffect(() => {
    setSortedData(bubbleSortArray(props.data))
  }
    , [refresh])

  return (
    <>
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
        swap(arr[j], arr[j + 1])}
      </li>
      <li>
        So our steps for processing data looks like this:
      </li>
      <li id="processedData">
        {/* {steps.map((step, index) => {
          return (
            <SortStep key={index} data={step} />
          )
        })} */}
      </li>
      <li>
        Our fully sorted data:
        {/* <SortStep data={sortedData} /> */}
      </li>
    </>
  )
}

export default BubbleSort
