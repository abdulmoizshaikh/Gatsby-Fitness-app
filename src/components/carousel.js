import React from "react"
import Carousel from "react-bootstrap/Carousel"
import * as images from "../../assets/images/index"

const CarouselComp = props => {
  // const { images } = props
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{ height: props.height }}
          className="d-block w-100"
          src={images.banner1}
          alt="first slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: props.height }}
          className="d-block w-100"
          src={images.banner2}
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={{ height: props.height }}
          className="d-block w-100"
          src={images.banner3}
          alt="third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselComp
