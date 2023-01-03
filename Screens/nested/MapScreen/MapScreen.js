import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import styles from "./styles";

export default function MapScreen({ route }) {
  const { latitude, longitude } = route.params.coords;
  const { place } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title={place} />
      </MapView>
    </View>
  );
}
