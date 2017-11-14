import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar, Platform } from 'react-native'

import Navigator from './config/routes'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',

  $white: '#FFFFFF',

  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#F0F0F0',
})

export default () => (
  <Navigator style={{ paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }} />
)
