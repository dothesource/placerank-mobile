import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native'

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media ios': {
      paddingTop: 20,
      height: 60,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
      height: 40 + StatusBar.currentHeight,
    },
    backgroundColor: '$white',
  },
  buttonLeft: {
    marginLeft: 5,
  },
  buttonRight: {
    marginRight: 5,
  },
  title: {
    marginRight: 5,
  },
})
