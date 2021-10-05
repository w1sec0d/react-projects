import { useState, useEffect } from "react"
import "./index.css"

import { Title } from "../../components/Title"
import { Tour } from "./TourCard"

function Tours() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      let response = await fetch("https://course-api.com/react-tours-project")
      let tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  const filterTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id))
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return <h1>Cargando...</h1>
  }
  if (error) {
    return <h1>Hubo un error mientras se cargaban los datos :(</h1>
  }
  if (tours.length >= 1) {
    return (
      <div className="App">
        <Title>Our tours</Title>
        {tours.map((item) => (
          <Tour {...item} filterTour={filterTour} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="App">
        <h1>No tours left</h1>
        <button
          type="button"
          className="reloadButton"
          onClick={() => fetchTours()}
        >
          Reload
        </button>
      </div>
    )
  }
}

export default Tours
