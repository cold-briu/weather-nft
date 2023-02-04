import React from 'react'
import "./spiner.css"

const Loader = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="lds-heart"><div></div></div>
    </div>
  )
}

export default Loader