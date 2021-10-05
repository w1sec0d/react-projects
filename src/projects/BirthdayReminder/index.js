import React from "react"
import "./index.css"

import { Card } from "../../components/Card/index"
import data from "../../data/birthdays"

function BirthdayReminder() {
  const [birthdays, setBirthdays] = React.useState(data)
  return (
    <div className="main">
      <section className="container">
        <h1 className="title">{birthdays.length} cumpleaños hoy</h1>
        {birthdays.map((person) => (
          <Card
            img={person.image}
            imgAlt={person.name}
            title={person.name}
            subtitle={person.age + " años"}
            key={person.name}
          />
        ))}
        <button
          type="button"
          className="btn"
          onClick={() => {
            setBirthdays([])
          }}
        >
          Limpiar Todo
        </button>
      </section>
    </div>
  )
}

export default BirthdayReminder
