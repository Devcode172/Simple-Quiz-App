import React, { useEffect, useState } from 'react'

const Timer = ({seeResult, setTimeTaken}) => {
  const [time, setTime] = useState(0)
  const [timeFormat, setTimeFormat] = useState(null)

  useEffect(() => {
    if (seeResult){
       setTimeTaken(time)
     return
    } 
    let intervalId = setInterval(() => {
      setTime(prev => {
        return prev + 1
      })
    }, 1000)
    return ()=>{clearInterval(intervalId)}
  }, [seeResult]);
  useEffect(() => {

    setTimeFormat(`${(Math.floor(time / 60)).toString().padStart(2, 0)} : ${(time % 60).toString().padStart(2, 0)}`)
  }, [time])
console.log(time)
  return (
    <div>
      {`⌚Time ${timeFormat}`}
    </div>
  )
}

export default Timer
