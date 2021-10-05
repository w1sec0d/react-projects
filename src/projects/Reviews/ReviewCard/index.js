import React from "react"
import { FaQuoteRight } from "react-icons/fa"
import "./index.css"

const ReviewCard = ({ id, image, job, name, text }) => {
  return (
    <>
      <div className="profilePicture">
        <img src={image} alt={name} />
        <div className="quoteIcon">
          <FaQuoteRight />
        </div>
      </div>
      <div className="textContainer">
        <h3 className="name">{name}</h3>
        <h3 className="job">{job}</h3>
        <p className="text">{text}</p>
      </div>
    </>
  )
}

export default ReviewCard
