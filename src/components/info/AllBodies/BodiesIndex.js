import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AllBodiesNav from './AllBodiesNav.js'

import Container from 'react-bootstrap/Container'


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

  
  


  return (
    <>
      <Container className="mt-4 all-bodies">
        <h2>All Bodies.</h2>
        <AllBodiesNav planets={planets} hasError={hasError}/>
      </Container>
    </>
  )
}

export default PlanetsIndex