import React, { useEffect, useState } from "react"
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
import ContactUs from "./contactUs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
/**for react spinners */
import { css } from "@emotion/core"
import PacmanLoader from "react-spinners/PacmanLoader"
/**
 * Bootstrap global style.css
 */
import "bootstrap/dist/css/bootstrap.min.css"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #333;
`

export default function Main() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    var prevScrollpos = window.pageYOffset

    /**for hide spinner  in did mount*/
    setLoading(false)

    window.onscroll = () => {
      // When the user scrolls down 700px from the top of the document, show the button
      scrollFunction()

      // for header scroll
      var currentScrollPos = window.pageYOffset
      if (currentScrollPos === prevScrollpos) {
        document.getElementById("navbar").style.backgroundColor = "transparent"
      } else {
        document.getElementById("navbar").style.backgroundColor =
          "rgba(51, 51, 51, 0.8)"
      }
    }
  }, []) // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  function scrollFunction() {
    //Get the button
    var mybutton = document.getElementById("myBtn")
    console.log("document.body.scrollTop", document.body.scrollTop)
    console.log(
      "document.documentElement.scrollTop",
      document.documentElement.scrollTop
    )
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      mybutton.style.display = "block"
    } else {
      mybutton.style.display = "none"
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div id="container">
      {loading ? (
        <div className="sweet-loading">
          <PacmanLoader
            css={override}
            size={100}
            color={"#333"}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Header />
          <Home />
          <Services />
          <JoinNow />
          <Price />
          <Team />
          <ContactUs />
          <Footer />

          <button onClick={topFunction} id="myBtn" title="Go to top">
            <FontAwesomeIcon icon={faChevronUp} id="faChevronUp" />
          </button>
        </>
      )}
    </div>
  )
}

library.add(fab, faCheckSquare, faCoffee)
