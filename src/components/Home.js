import React from 'react'

import earthIcon from './../images/earth-icon.png'



const Home = () => {

  return (
    <div className="home-container text-center">
      <div className="home-overlay">
        <h1 className="display-5">The Solar Systems Finest Index.</h1>
        <img src={earthIcon} alt="image of the earth" />
      </div>
    </div>
  )
}

export default Home