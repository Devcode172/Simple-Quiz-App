import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/Result'

function App() {
const [score, setScore] = useState(0)
const [seeResult, setSeeResult] = useState(false)
const [timeTaken, setTimeTaken] = useState(0)
 return (
  <>
  <Timer seeResult ={seeResult} setTimeTaken = {setTimeTaken} />
  {seeResult ? <Result score = {score} timeTaken = {timeTaken}/> : <Questions setScore = {setScore} setSeeResult = {setSeeResult}/>}
  
  
  </>
 )
}

export default App
