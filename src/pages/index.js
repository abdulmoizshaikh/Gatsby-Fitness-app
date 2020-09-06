import React from "react"
import "../styles/styles.css"

import Home from "./home"
import Header from "../components/header"
import Services from "./services"
import JoinNow from "./joinNow"
import Price from "./price"
import Team from "./team"
import Footer from "./footer"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

/**
 * Bootstrap global style.css
 */
import "bootstrap/dist/css/bootstrap.min.css"

export default function Main() {
  // window.onclick = setPaddingTop

  // function setPaddingTop() {
  //   let navHeight = document.getElementById("navbar").clientHeight + 10
  //   console.log("navHeight", navHeight)
  //   document.getElementById("services").style.paddingTop = `${navHeight}px`
  //   document.getElementById("joinNow").style.paddingTop = `${navHeight}px`
  //   document.getElementById("price").style.paddingTop = `${navHeight}px`
  //   document.getElementById("team").style.paddingTop = `${navHeight}px`
  // }

  return (
    <div id="container">
      <Header />
      <Home />
      <Services />
      <JoinNow />
      <Price />
      <Team />
      <Footer />
    </div>
  )
}

library.add(fab, faCheckSquare, faCoffee)
