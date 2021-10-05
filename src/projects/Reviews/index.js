import React, { useState } from "react"
import { Title } from "../../components/Title"
import { FaCaretRight, FaCaretLeft } from "react-icons/fa"
import "./index.css"
import data from "../../data/reviews"
import ReviewCard from "./ReviewCard"

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const Reviews = () => {
  const [reviewShown, setReviewShown] = useState(0)

  const randomReview = () => {
    let newReview = randomNum(0, data.length)
    while (newReview === reviewShown) {
      newReview = randomNum(0, data.length)
    }
    setReviewShown(newReview)
  }

  const prevReview = () => {
    let newReview = reviewShown - 1
    if (newReview < 0) {
      newReview = data.length - 1
    }
    setReviewShown(newReview)
  }

  const nextReview = () => {
    let newReview = reviewShown + 1
    if (newReview > data.length - 1) {
      newReview = 0
    }
    setReviewShown(newReview)
  }

  return (
    <>
      <Title className="title">Our Reviews</Title>
      <div className="container">
        <ReviewCard {...data[reviewShown]} />
        <div className="navContainer">
          <FaCaretLeft className="icon" onClick={() => prevReview()} />
          <FaCaretRight className="icon" onClick={() => nextReview()} />
        </div>
        <button type="button" className="button" onClick={() => randomReview()}>
          Surprise Me
        </button>
      </div>
    </>
  )
}

export default Reviews
