/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Spinner from '../Spinner'


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
    <Container className='mt-5'>
      {planets ?
        <div className='cards d-flex justify-content-evenly'>
          <div className='img-wrapper'>
            <div id={planets.englishName}></div>
          </div>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>{planets.englishName}</h1></Card.Title>
              <Card.Text>
                <p>Density: {planets.density} g/cm³</p>
                <p>Gravity: {planets.gravity} m/s²</p>
                <p>Mean Radius: {planets.meanRadius} km</p>
                <p>Average Temperature: {parseFloat(planets.avgTemp) - 273} <span>&deg;C</span></p>
                <p>Escape Velocity: {planets.escape} m/s</p>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        :
        <Spinner />
      }
    </Container>
  )
}

export default planetSingle