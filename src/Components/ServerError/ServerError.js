import React from 'react'
import './ServerError.css'
import PropTypes from 'prop-types'

function ServerError ({ serverError }) {
  return (
    <div className="serverError">
      <p>{serverError}</p>
    </div>
  )
}

export default ServerError

ServerError.propTypes = {
  serverError: PropTypes.string.isRequired
};