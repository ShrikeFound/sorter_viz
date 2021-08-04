import React from 'react'

const BubbleSort = (props) => {
  // const [data, setData] = useState({})
  const bubbleSortArray = arr => {
    var sorted = arr
    for(let i=0; i<sorted.length; i++){
      for(let j=0; j<sorted.length-i-1; j++){
        if(sorted[j] > sorted[j + 1]){
          [sorted[j], sorted[j + 1]] = [sorted[j +1], sorted[j]]
        }
      }
    }
    return sorted
  }
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
        So our processed initial data looks like this:
      </li>
      <li id="processedData">
        {bubbleSortArray(props.data).map((number, index) => {
          return(
            <div key={index}>
              {`${number},   `}
            </div>
          )
        })}
      </li>
    </>
  )
}

export default BubbleSort
