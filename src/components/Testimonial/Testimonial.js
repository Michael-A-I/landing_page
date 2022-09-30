import React from "react"
import Containerize from "../ui/Containerize"
import "./css/Testimonial.css"

function Testimonial() {
  return (
    <>
      <div className="testimonial-bg">
        <Containerize>
          <div className="testimonial-wrapper">
            <p className="testimonial-text">Services offered hear are amazing they helped me install a twin turbo in my porsche for a fair!!!</p>
            <p className="testimonial-name"> - Sum Guy</p>
          </div>
        </Containerize>
      </div>
    </>
  )
}

export default Testimonial
