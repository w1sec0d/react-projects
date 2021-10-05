import React from "react"

const FilterButton = ({ onClick, selected, children }) => {
  const style = {
    background: !selected ? "white" : "#C59D5F",
    border: "none",
    borderRadius: "10px",
    color: !selected ? "#C59D5F" : "#F1F5F8",
    cursor: "pointer",
    padding: "5px",
    fontSize: "1rem",
    margin: "0 10px",
    transition: "all 0.5s 0s ease",
  }
  return (
    <button type="button" style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default FilterButton
