import React from "react"
import CarouselComp from "../components/carousel"
// import * as images from "../../assets/images"

export default function Home() {
  return (
    <div id="home">
      <CarouselComp
        height="100vh"
        // images={[images.banner1, images.banner2, images.banner3]}
      />
    </div>
  )
}
