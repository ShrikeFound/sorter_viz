import React from 'react'

const SortStep = (props) => {

  return (
    <li className="oneline">
      {props.data.map((value, index) => {
        return(
          <span key={index}> {value},  </span>
        )
      })}
    </li>
  )
}

export default SortStep
