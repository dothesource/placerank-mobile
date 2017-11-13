import React from 'react'

import { Container } from '../components/Container'
import { Map } from '../components/Map'

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const markers = [
  { title: 'bla', latlng: { latitude: 37.78825, longitude: -122.4304 } },
  { title: 'ble', latlng: { latitude: 37.78825, longitude: -122.4344 } },
]

const Home = () => (
  <Container>
    <Map initialRegion={initialRegion} markers={markers} />
  </Container>
)

export default Home

// [
//   {
//     name: bla,
//     lat: 1,
//     long: 2
//   } {
//     name: ble,
//     lat: 1,
//     long: 2
//   }
// ]
