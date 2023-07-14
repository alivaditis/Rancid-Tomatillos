import React from 'react'
import './ServerError.css'

function ServerError ({ serverError }) {
  return (
    <div className="serverError">
      <p>{serverError}</p>
    </div>
  )
}

export default ServerError