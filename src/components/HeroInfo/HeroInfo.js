import React from "react"
import Containerize from "../ui/Containerize"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import ToolsSRC from "../../images/tools.jpg"
import ToolsSRC2 from "../../images/tools2.jpg"

import "./css/HeroInfo.css"

function HeroInfo() {
  return (
    <>
      <Container className>
        <Row className="HeroInfo-row">
          <Col>
            <div className="HeroInfo-text-wrapper">
              <h1 style={{ fontSize: "48px", color: "#F9FAF8" }}>
                Your local handy man at
                <br /> your service!
              </h1>
              <p style={{ fontSize: "18px", color: "#E5E7EB" }}>
                {" "}
                Here to help you install, and repair your house - <br />
                from plumbing, electrical work, and even yard work.
                <br /> Let me help you!
              </p>
              <Button> Sign Up</Button>
            </div>
          </Col>
          <Col className="HeroInfo-img-column">
            <div className="hero-info-image-wrapper">
              <img className="hero-info-image" src={ToolsSRC} alt="tools" srcset="" />
              <img className="hero-info-image" src={ToolsSRC2} alt="tools" srcset="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeroInfo
