import React from "react"
import Home from "./home";
import Header from '../components/header';
import Services from './services';
import JoinNow from './joinNow';
import Price from './price';
import Team from './team';
import Footer from "./footer";

export default function Main() {
  return (
    <div style={{ backgroundColor: "red", margin: '0px', padding: "0px", width: "100%", height: "100%" }}>
      <Header />
      <Home />
      <Services />
      <JoinNow />
      <Price />
      <Team />
      <Footer />
    </div>)
}
