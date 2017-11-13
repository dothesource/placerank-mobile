/* @flow weak */

import React from 'react'
import PropTypes from 'prop-types'
import { MapView } from 'expo'

import styles from './styles'

const Map = ({ initialRegion, markers }) => (
  <MapView style={styles.container} initialRegion={initialRegion}>
    {markers.map(marker => (
      <MapView.Marker key={marker.title} coordinate={marker.latlng} title={marker.title} />
    ))}
  </MapView>
)

Map.propTypes = {
  initialRegion: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    latitudeDelta: PropTypes.number,
    longitudeDelta: PropTypes.number,
  }),
  markers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    latlng: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }).isRequired),
}

export default Map
