import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Header } from '../components/Header'

class Dashboard extends PureComponent {
  handleHomeButtonPress = () => {
    this.props.navigation.navigate('DrawerOpen')
  }
  render() {
    return <Header headerText="Dashboard" handleButtonPress={this.handleHomeButtonPress} />
  }
}

Dashboard.propTypes = {
  navigation: PropTypes.any,
}

export default Dashboard
