import React from "react"
import "./css/Information.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import repair from "../../images/repair.jpg"
import repair2 from "../../images/repair2.jpg"
import welding from "../../images/welding.jpg"
import tune from "../../images/tune.jpg"

function InformationDisplay() {
  return (
    <>
      <Row className="information-display-wrapper">
        <Col className="information-display-item">
          <img className="information-display-image" src={repair} alt="repair" />
          <div className="information-display-text">
            <p>Repair Operations.</p>
          </div>
        </Col>
        <Col className="information-display-item">
          <img className="information-display-image" src={repair2} alt="repair" />
          <div className="information-display-text">
            <p>Affordable oil changes.</p>
          </div>
        </Col>{" "}
        <Col className="information-display-item">
          <img className="information-display-image" src={welding} alt="repair" />
          <div className="information-display-text">
            <p>Welding and exhaust problem fixes.</p>
          </div>
        </Col>{" "}
        <Col className="information-display-item">
          <img className="information-display-image" src={tune} alt="repair" />
          <div className="information-display-text">Professional car diagnostics.</div>
        </Col>
      </Row>
    </>
  )
}

export default InformationDisplay
