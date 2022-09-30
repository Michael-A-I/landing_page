import React from "react"
import Containerize from "../ui/Containerize"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./css/CallAction.css"

function CallAction() {
  return (
    <>
      <Containerize>
        <div className="call-action-bg">
          <div className="call-action-wrapper">
            <Row className="call-action-row">
              <Col>
                <h1 className="call-action-title">Call to action</h1>
                <p className="call-action-sub">signup for our product clicking that button right over there!</p>
              </Col>
              <Button className="call-action-button">Sign Up</Button>
            </Row>
          </div>
        </div>
      </Containerize>
    </>
  )
}

export default CallAction
