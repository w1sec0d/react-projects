import React, { useState, useEffect } from "react"
import data from "./data"
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa"

import "./index.css"

const Slider = () => {
  const [slide, setSlide] = useState(0)
  const [people, setPeople] = useState(data)

  const nextSlide = () => {
    setSlide((oldSlide) => {
      let slide = oldSlide + 1
      if (slide > people.length - 1) {
        slide = 0
      }
      return slide
    })
  }
  const prevSlide = () => {
    setSlide((oldSlide) => {
      let slide = oldSlide - 1
      if (slide < 0) {
        slide = people.length - 1
      }
      return slide
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setSlide((oldSlide) => {
        let slide = oldSlide + 1
        if (slide > people.length - 1) {
          slide = 0
        }
        return slide
      })
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [slide])
  return (
    <main>
      <div className="title">
        <span>/</span>
        <p>Reviews</p>
      </div>
      <FaArrowLeft className="button prev" onClick={() => prevSlide()} />
      <FaArrowRight className="button next" onClick={() => nextSlide()} />
      <div className="slideContainer">
        {people.map((person, index) => {
          let slideName = "slide"
          if (index === slide) {
            slideName += " currentSlide"
          } else if (
            index === slide - 1 ||
            (slide === 0 && index === data.length - 1)
          ) {
            slideName += " prevSlide"
          } else if (index === slide + 1) {
            slideName += " nextSlide"
          } else if (slide === data.length - 1 && index === 0) {
            slideName += " nextSlide"
          } else {
            slideName += " inactiveSlide"
          }

          return (
            <div className={slideName} key={index}>
              <img src={person.image} alt="" />
              <h4 className="name">{person.name}</h4>
              <h4 className="job">{person.title}</h4>
              <p>{person.quote}</p>
              <FaQuoteRight className="quoteIcon" />
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Slider
