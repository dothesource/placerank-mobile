// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { MapView } from 'expo';
import { Ionicons, Octicons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (


      <View style={{ flex: 1, top: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight }}>
        <View
          style={{
            maxHeight: 40,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text>Find a location...</Text>
          <Octicons style={{}} name="three-bars" size={32} color="gray" />
        </View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
