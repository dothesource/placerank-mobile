/* @flow weak */

import React from 'react'
import PropTypes from 'prop-types'
import { MapView } from 'expo'

import styles from './styles'

const Map = () => (
  <MapView
    style={styles.container}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}
  />
)

export default Map
