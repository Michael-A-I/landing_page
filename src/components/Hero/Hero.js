import React from "react"
import Containerize from "../ui/Containerize"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "./css/Hero.css"
import NavLinks from "../Navigation/NavLinks/NavLinks"
import Logo from "../Navigation/Logo/Logo"
import HeroInfo from "../HeroInfo/HeroInfo"
function Hero() {
  return (
    <div className="hero-background">
      <Containerize>
        <div className="hero-wrapper">
          <Row>
            <NavLinks logo={<Logo size={3} style={{ display: "block" }} />} />
          </Row>
          <Row>
            <HeroInfo />
          </Row>
        </div>
      </Containerize>
    </div>
  )
}

export default Hero
