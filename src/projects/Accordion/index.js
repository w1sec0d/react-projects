import React from "react"
import "./index.css"

import data from "../../data/questions"
import Question from "./Question"

const index = () => {
  return (
    <div className="mainContainer">
      <h2 className="title">Questions and answers about login</h2>
      <div className="questionsContainer">
        {data.map((question) => (
          <Question
            key={question.id}
            text={question.title}
            answer={question.info}
          />
        ))}
      </div>
    </div>
  )
}
export default index
