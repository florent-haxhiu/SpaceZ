import React from 'react'
import spinnerImg from './../../images/spinner.gif'

const Spinner = () => (
  <div className="spinner-wrapper justify-content-center">
    <img src={spinnerImg} alt="" className="spinner" />
  </div>
)

export default Spinner