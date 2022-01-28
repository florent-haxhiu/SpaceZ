/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


const planetSingle = () => {
  
  // States
  const [ planets, setPlanets ] = useState([])
  // const [ hasError, setHasError ] = useState[{ error: false, message: '' }]

  // Use params
  const { planetId } = useParams()

  useEffect(() => {
    const getSinglePlanet = async () => {
      try {
        const { data } = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${planetId}`)
        setPlanets(data)
      } catch (error) {
        // setHasError({ error: true, message: error.message })
        console.log(error)
      }
    }
    getSinglePlanet()
  }, [planetId])

  return (
    <Container className='mt-4'>
      {planets ?
        <>
          <h1>{planets.englishName}</h1>
          <Card style={{ width: '18rem' }}>
            
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>Density: {planets.density} g/cm³</p> <br />
                
              </Card.Text>
            </Card.Body>
          </Card>
          
          
          {/* <p>{planets.mass.massValue}</p> */}
          <p>Gravity: {planets.gravity} m/s²</p>
          <p>Mean Radius: {planets.meanRadius} km</p>
          <p>Average Temperature: {parseFloat(planets.avgTemp) - 273} <span>&deg;C</span></p>
          <p>Escape Velocity: {planets.escape} m/s</p>
          {/* {planets.map((planet, i) => {
            <p>{planet.moons[i].moon}</p>
          })} */}
        </>
        :
        <h2>Something went wrong</h2>
      }
    </Container>
  )
}

export default planetSingle