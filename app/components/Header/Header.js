import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

const Header = ({ handleButtonPress, headerText }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.buttonLeft} onPress={handleButtonPress}>
      <MaterialIcons name="menu" size={32} color="grey" />
    </TouchableOpacity>
    <Text style={styles.title}>{headerText}</Text>
    <TouchableOpacity style={styles.buttonRight}>
      <MaterialIcons name="settings" size={28} color="grey" />
    </TouchableOpacity>
  </View>
)

Header.propTypes = {
  handleButtonPress: PropTypes.func,
  headerText: PropTypes.string,
}

export default Header
