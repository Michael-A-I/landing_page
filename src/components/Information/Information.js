import React from "react"
import InformationDisplay from "./InformationDisplay"
import InformationHeader from "./InformationHeader"

import Containerize from "../ui/Containerize"

function Information() {
  return (
    <>
      <Containerize>
        <div className="information-wrapper">
          <InformationHeader />
          <InformationDisplay />
        </div>
      </Containerize>
    </>
  )
}

export default Information
