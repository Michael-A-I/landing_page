import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faToolbox } from "@fortawesome/free-solid-svg-icons"
function Logo(props) {
  return (
    <>
      <FontAwesomeIcon icon={faToolbox} size={`${props.size}px`} />
    </>
  )
}

export default Logo
