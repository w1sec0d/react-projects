import React from "react"
import "./DishCard.css"

export const DishCard = ({ desc, id, img, price, title }) => {
  return (
    <div className="dishCard" key={id}>
      <img src={img} alt={title} />
      <div className="headingText">
        <h4 className="title">{title}</h4>
        <h4 className="price">${price}</h4>
      </div>
      <hr />
      <p className="description">{desc}</p>
    </div>
  )
}
