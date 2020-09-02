import React from "react"
import "../styles/styles.css";

import Home from "./home";
import Header from '../components/header';
import Services from './services';
import JoinNow from './joinNow';
import Price from './price';
import Team from './team';
import Footer from "./footer";
/**
 * Bootstrap global style.css
 */
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
  return (
    <div id="container">
      {/* <div id="content"> */}
      <Header />
      <Home />
      <Services />
      <JoinNow />
      <Price />
      <Team />
      <Footer />
      {/* </div> */}
    </div>)
}
