import React, { useEffect, useState } from 'react'

// no images for the planets 
import Planet from './../../../images/earth-icon.png'
import Asteroid from './../../../images/asteroid.png'
import Moon from './../../../images/moon.png'
import Comet from './../../../images/comet.png'
import DwarfPlanet from './../../../images/dwarf-planet.png'
import Star from './../../../images/sun.png'

import Spinner from '../Spinner.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const AllBodiesNav = ({  planets, hasError }) => {
  
  const [ bodyTypeList, setBodyTypeList ] = useState([])
  const [ filteredPlanets, setFilteredPlanets ] = useState([])

  useEffect(() => {
    if (planets.length){
      const filteredBodyTypeItems = []
      planets.forEach(body => {
        filteredBodyTypeItems.indexOf(body.bodyType) === -1 && filteredBodyTypeItems.push(body.bodyType)
      })
      setBodyTypeList(filteredBodyTypeItems)
      setFilteredPlanets(planets)
      // console.log(bodyTypeList)
    }
  },[planets])

  const updateFilteredPlanets = (e) => {
    const filteredPlanetsToAdd = planets.filter(body => body.bodyType === e.target.value)
    setFilteredPlanets(filteredPlanetsToAdd)
    console.log(filteredPlanets)
  }
  

  
  return (
    <div className="search">
      <h4>Search.</h4>
      <select name="" id="" onChange={updateFilteredPlanets}>
        <option value="">--All Bodies--</option>
        {bodyTypeList.map((body, i) => <option key={i} value={body}>{body}</option>)}
      </select>

      <Row>
        {planets.length ?
          <>
            {(filteredPlanets.length ? filteredPlanets : planets).map((body, i) => {
              return (
                <Col key={i} md='6' lg='3' className='mb-4'>
                  <Card className='coloring'>
                    <div className="index-images m-auto justify-content-center">
                        
                      {body.bodyType === 'Planet' ? 
                        <img className='w-75' src={Planet} alt="image of earth" /> 
                        : 
                        body.bodyType === 'Asteroid' ? 
                          <img className='w-50' src={Asteroid} alt="image of asteroid" /> 
                          :
                          body.bodyType === 'Moon' ?
                            <img className='w-75' src={Moon} alt="image of moon" /> 
                            :
                            body.bodyType === 'Dwarf Planet' ? 
                              <img className='w-75' src={DwarfPlanet} alt="image of pluto" /> 
                              :
                              body.bodyType === 'Comet' ? 
                                <img className='w-75' src={Comet} alt="image of comet" /> 
                                :
                                <img className='w-100' src={Star} alt="image of star" />
                      }
                    </div>
                    <Card.Footer className='text-center'>
                      <span className="bold">Name:</span> {body.englishName}
                      <em className='d-block'><span className="bold">Body Type:</span> {body.bodyType}</em>
                    </Card.Footer>
                  </Card>
                </Col>
              )
            })}
          </>
          :
          hasError.error ?
            <h2 className='error'>error: {hasError.message}</h2>
            :
            <Spinner />
        }
      </Row>
    </div>

  )
}

export default AllBodiesNav