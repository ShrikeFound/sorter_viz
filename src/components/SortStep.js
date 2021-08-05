import React from 'react'

const SortStep = (props) => {

  return (
    <div className="oneline">
      {props.data.map((value, index) => {
        return(
          <div key={index} >
            <p> {value},  </p>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default SortStep
