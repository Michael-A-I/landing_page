import React from "react"
import Containerize from "../ui/Containerize"
import "./css/Footer.css"

function Footer() {
  return (
    <>
      <div className="footer-bg">
        <Containerize>
          <p className="footer-copyright">Copyright &copy; Zero</p>
        </Containerize>
      </div>
    </>
  )
}

export default Footer
