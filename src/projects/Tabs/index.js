import React, { useState, useEffect } from "react"
import { FaAngleDoubleRight } from "react-icons/fa/"

import { Title } from "../../components/Title"

import "./index.css"
const apiUrl = "https://course-api.com/react-tabs-project"

const Tabs = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [devs, setDevs] = useState([])
  const [devShown, setDevShown] = useState(0)

  const fetchDevs = async () => {
    try {
      const response = await fetch(apiUrl)
      const responseJSON = await response.json()
      setLoading(false)
      setDevs(responseJSON)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => {
    fetchDevs()
  }, [])

  if (loading) {
    return <h1>Cargando...</h1>
  }
  if (error) {
    return <h1>Hubo un error mientras se cargaban los datos :(</h1>
  }
  return (
    <main>
      <Title lineColor="#2CAEBA" fontSize="2.5rem">
        Experience
      </Title>
      <div className="mainContent">
        <div className="devMenu">
          {devs.map((dev, index) => (
            <button
              key={dev.id}
              className={devShown === index ? "selectedButton" : ""}
              onClick={() => {
                setDevShown(index)
              }}
            >
              {dev.company}
            </button>
          ))}
        </div>
        {devs.map((dev, index) => (
          <div
            style={dev.order - 1 === devShown ? {} : { display: "none" }}
            className="devCard"
          >
            <h3>{dev.title}</h3>
            <h3 className="company">{dev.company}</h3>
            <h5 className="date">{dev.dates}</h5>
            {dev.duties.map((duty) => (
              <div className="duty">
                <FaAngleDoubleRight className="icon" />
                <p>{duty}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Tabs
