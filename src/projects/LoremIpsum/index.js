import React, { useState } from "react"
import "./index.css"
import data from "./data"

const LoremIpsum = () => {
  const handleChange = (event) => {
    setParagraphs(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setText(data.slice(0, paragraphs))
  }
  const [paragraphs, setParagraphs] = useState(0)
  const [text, setText] = useState([])
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Tired of bored lorem ipsum?</h1>
        <div className="form-control">
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            type="number"
            name="paragraphs"
            id="paragraphs"
            value={paragraphs}
            onChange={handleChange}
            min="0"
            max="8"
          />
          <button type="submit" className="btn" style={{ marginLeft: "10px" }}>
            Generate
          </button>
        </div>
      </form>
      <div className="textContainer">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </div>
    </div>
  )
}

export default LoremIpsum
