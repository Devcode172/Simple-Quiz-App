import React from 'react'

const Result = ({score, timeTaken}) => {
  return (
    <div>
      <div> result : {score}</div> 
      <div>Time Taken : {`${Math.floor(timeTaken/60).toString().padStart(2,0)} : ${(timeTaken % 60).toString().padStart(2,0)}` }</div>
    </div>
  )
}

export default Result
