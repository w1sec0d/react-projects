import React, { useState } from "react"
import "./index.css"

export const Tour = ({ id, image, info, name, price, filterTour }) => {
  const [detailsShown, setDetailsShown] = useState(false)
  return (
    <article className="tourCard" key={id}>
      <img src={image} className="image" alt={name} />
      <div className="textContainer">
        <div className="titleContainer">
          <h3 className="tourTitle">{name}</h3>
          <p className="price">${price}</p>
        </div>
        <p>
          {detailsShown ? info : info.substring(0, 150) + "..."}
          <button
            type="button"
            className="detailsButton"
            onClick={() => setDetailsShown(!detailsShown)}
          >
            {detailsShown ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <button
        type="button"
        className="dismissButton"
        onClick={() => filterTour(id)}
      >
        Not interested
      </button>
    </article>
  )
}
