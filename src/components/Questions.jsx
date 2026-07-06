import React, { useState } from 'react'
import QuizData from "../Questions.json"
const Questions = ({ setScore , setSeeResult}) => {
    //to store remarks
    let remarks = ""
    console.log(QuizData)
    // i added id key in Qustions.json later, otherwise can handle index through id
    const [index, setIndex] = useState(0)
    // true if user select correct option 
    const [correctAnswer, setCorrectAnswer] = useState(false)
    // to store user's selected option
    const [selectedOption, setSelectedOption] = useState(null)
    // to store original answer
    const [realAnswer, setRealAnswer] = useState(null)
    // to check if user selects an option or not in present question
    const [choose, setChoose] = useState(false)
    // to show remarks
    const [remarksVisible, setRemarksVisible] = useState(false)
    // to store count of solved questions
    const [solvedQuestionCount, setSolvedQuestionCount] = useState([])
    // function to verify the user's answer
    /* description : 
      this function will run when user click on any option 
    */
    function checkAnswer(option) {
        setSelectedOption(option)
        setRealAnswer(QuizData[index].correctAnswer)
        setChoose(true)
        setRemarksVisible(true)
        if(solvedQuestionCount.includes(QuizData[index].id)){
            setSolvedQuestionCount([...solvedQuestionCount])
        }
        else{
        setSolvedQuestionCount([...solvedQuestionCount,QuizData[index].id])
        }
        //setCorrectAnswer(false)
        console.log(selectedOption)
        if (option == QuizData[index].correctAnswer) {
            setCorrectAnswer(true)

            setScore(prev => prev + 1)
        }
    }
    remarks = correctAnswer ? "Excellent🏆" : "Best of luck for next time😑"
    console.log(realAnswer)
    // function to move to next question
    function nextQuestion() {
        setIndex(prev => prev + 1)
        // for next questions(if not solved) setting the states to initial values
        setCorrectAnswer(false)
        setSelectedOption(false)
        setChoose(false)
        setRemarksVisible(false)
    }
    // function to move to previous question
    function previousQuestion() {
        setIndex(prev => prev - 1)
        // for previous questions(if not solved) setting the states to initial values
        setCorrectAnswer(false)
        setRemarksVisible(false)
        setSelectedOption(false)
    }

    function handleResult(){
     setSeeResult(true)
    }
    return (
        <div className='bg-[#a8a8e7]  p-2 max-w-130 mx-auto my-7 rounded-[10px]'>

            {/* Question Numbering */}
            <h2>Question {index + 1} / {QuizData.length}</h2>

            {/* Question */}
            <h3 className='mt-2'>{QuizData[index].question}</h3>

            {/* displaying the options associated to question */}
            {QuizData[index].options.map((option) => {
                return (

                    /* options */
                    <div onClick={() => { checkAnswer(option) }} key={option} className={`bg-[white] mt-4 rounded-[5px] cursor-pointer px-1 py-2 ${solvedQuestionCount.includes(QuizData[index].id) ? "pointer-events-none" : "cursor-pointer"}  ${choose ? "pointer-events-none" : "cursor-pointer"}  hover:bg-[#cbcbf8] ${selectedOption == option ? correctAnswer ? " bg-green-200" : "bg-red-200" : ""} `}>{option}</div>
                )
            })}
            <div className='flex flex-col items-center'>
                {remarksVisible && remarks}
                {remarksVisible && <h3>Correct option : {realAnswer}</h3>}

            </div>

            {/* buttons for next and previous question */}
            <div className='flex flex-col mt-3'>
                {/* Back button */}
                <button onClick={previousQuestion} disabled={index === 0} className={`border p-1 rounded-[5px] mt-1 mb-1 cursor-pointer hover:bg-black/5 disabled:${index == 0 ? "cursor-not-allowed" : ""} disabled:opacity-30`} >Back</button>

                {/* Next button */}
                <button disabled={index + 1 == QuizData.length} onClick={nextQuestion} className={`border p-1 rounded-[5px] mt-1 mb-1 cursor-pointer hover:bg-black/5 disabled:${index + 1 == QuizData.length ? "cursor-not-allowed" : ""} disabled:opacity-30`} >Next</button>

             { index + 1 == QuizData.length && <button onClick={handleResult} className={`border p-1 rounded-[5px] mt-1 mb-1 cursor-pointer hover:bg-black/5`} >See Result</button> }
            </div>
        </div>
    )
}

export default Questions
