import React from "react"
import data from "../../data/menu"

import "./index.css"

import { DishCard } from "./DishCard/DishCard"
import { Title } from "../../components/Title"
import FilterButton from "./FilterButton"

const Restaurant = () => {
  const [filter, setFilter] = React.useState("todo")
  return (
    <div className="restaurant">
      <Title lineColor="#C59D5F">Nuestro menú</Title>
      <div className="filterContainer">
        <FilterButton
          selected={filter === "todo"}
          onClick={() => setFilter("todo")}
        >
          Todo
        </FilterButton>
        <FilterButton
          selected={filter === "desayuno"}
          onClick={() => setFilter("desayuno")}
        >
          Desayuno
        </FilterButton>
        <FilterButton
          selected={filter === "almuerzo"}
          onClick={() => setFilter("almuerzo")}
        >
          Almuerzo/Cena
        </FilterButton>
        <FilterButton
          selected={filter === "batido"}
          onClick={() => setFilter("batido")}
        >
          Batidos
        </FilterButton>
      </div>
      <div className="dishContainer">
        {data.map((dish) =>
          dish.category === filter || filter === "todo" ? (
            <DishCard {...dish} className="dishCard" />
          ) : null
        )}
      </div>
    </div>
  )
}

export default Restaurant
