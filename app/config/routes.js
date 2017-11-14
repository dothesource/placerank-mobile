import { DrawerNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Dashboard from '../screens/Dashboard'

export default DrawerNavigator({
  Home: {
    screen: Home,
    title: 'Home',
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
    },
  },
})
