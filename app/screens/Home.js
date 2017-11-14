import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Map } from '../components/Map'
import { Header } from '../components/Header'

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

class Home extends PureComponent {
  handleDashboardButtonPress = () => {
    this.props.navigation.navigate('DrawerOpen')
  }
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <Map initialRegion={initialRegion} markers={markers} />
        <Header headerText="Home" handleButtonPress={this.handleDashboardButtonPress} />
      </Container>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.any,
}

export default Home
