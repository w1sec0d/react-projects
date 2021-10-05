import React from "react"
import "./index.css"

export const Card = ({
  img = "https://yt3.ggpht.com/1ke-jzV1G50H5gGV4ZkVD5qzTxMu-8e0-oRRzZWs02tzZhgbE4IE-CvXNpqmfT4EBiS2hoInVw=s88-c-k-c0x00ffffff-no-rj",
  imgAlt = "testing",
  title = "A title",
  subtitle = "A subtitle",
}) => {
  return (
    <div className="card">
      <div className="container">
        <img src={img} className="img" alt={imgAlt} />
        <div className="textContainer">
          <h2 className="text title">{title}</h2>
          <h3 className="text subtitle">{subtitle}</h3>
        </div>
      </div>
    </div>
  )
}
