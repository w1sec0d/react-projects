import React from "react"

export const Title = ({ lineColor = "#42a5f4", children }) => {
  const styles = {
    container: {
      margin: "2rem 0",
      width: "100%",
    },
    title: {
      letterSpacing: "2px",
      margin: 0,
      textAlign: "center",
    },
    hrTitle: {
      backgroundColor: lineColor,
      border: "none",
      width: "80px",
      height: "5px",
    },
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{children}</h1>
      <hr style={styles.hrTitle} />
    </div>
  )
}
