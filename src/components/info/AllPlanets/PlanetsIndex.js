import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import Spinner from '../utilities/Spinner'
import Earth from './../../../images/earth-icon.png'
import Jupiter from './../../../images/Jupiter.png'
import Saturn from './../../../images/Saturn.png'
import Mercury from './../../../images/Mercury.png'
import Venus from './../../../images/Venus.png'
import Neptune from './../../../images/Neptune.png'
import Mars from './../../../images/Mars.png'
import Uranus from './../../../images/Uranus.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Get images
// Make filter
// Style it nicer
// Pages for the planets. Create buttons. useParams.


const PlanetsIndex = () => {

  const [ planets, setPlanets ] = useState([])
  const [ hasError, setHasError ] = useState({ error: false, message: '' })

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const { data } = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        setPlanets(data.bodies)
      } catch (err) {
        setHasError({ error: true, message: err.message })
      }
    }
    getPlanets()
  }, [])

  const planetArr = [Uranus, Neptune, Jupiter, Mars, Mercury, Saturn, Earth, Venus]

  const realPlanets = planets.filter((body, i) => {
    return planets[i].bodyType === 'Planet'
  })

  return (
    <>
      <Container>
        <Row>
          {realPlanets.length ?
            <>
              {realPlanets.map(({ bodyType, englishName, id }, i) => {
                return (
                  <Col key={i} md='6' lg='3' className='mt-4'>
                    <Link to={`${id}`}>
                      <Card className='h-100'>
                        <div className="m-auto">
                          {/* <div id={englishName}></div> */}
                          <img className='img-fluid' src={planetArr[i]} alt={englishName} />
                        </div>
                        <Card.Footer className='text-center'>
                          {englishName}
                          <em className='d-block'>{bodyType}</em>
                        </Card.Footer>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </>
            :
            <h2 className='error'>error: {hasError.message}</h2>
          }
        </Row>
      </Container>
    </>
  )
}

export default PlanetsIndex
