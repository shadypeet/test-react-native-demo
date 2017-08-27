import React from 'react';
import { MapView } from 'expo';

class MapScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Map'
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}

export default MapScreen;
