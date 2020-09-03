import React from "react"
import Carousel from "react-bootstrap/Carousel"
import constant from "../config/constant"
import * as images from "../../assets/images/index"

export default function CarouselComp(props) {
  const { images } = props
  return (
    <Carousel>
      {constant.carouselItem.map(({ alt, title, description }, i) => {
        console.log("alt, title, description", alt, title, description)
        console.log("images[i]", images[i])
        return (
          <CarouselItem
            key={title}
            alt={alt}
            title={title}
            description={description}
            src={images.banner1}
          />
        )
      })}
    </Carousel>
  )
}

const CarouselItem = ({ alt, src, title, description }) => {
  // console.log(" alt, src, title, description ", alt, src, title, description)
  return (
    <Carousel.Item>
      <img className="d-block w-100 vh-100" src={src} alt={alt} />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
}
