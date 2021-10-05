import React, { useState } from "react"
import "./index.css"

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"

const Question = ({ text, answer }) => {
  const [answerShown, setAnswerShown] = useState(false)
  return (
    <div className="question">
      <div className="questionHead">
        <h3>{text}</h3>
        {!answerShown && (
          <FaPlusCircle
            className="questionIcon"
            onClick={() => {
              setAnswerShown(true)
            }}
          />
        )}
        {answerShown && (
          <FaMinusCircle
            className="questionIcon"
            onClick={() => {
              setAnswerShown(false)
            }}
          />
        )}
      </div>
      {answerShown && <p> {answer}</p>}
    </div>
  )
}

export default Question
