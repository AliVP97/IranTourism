import React from 'react';
import {Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon
        name="grid-outline"
        type="ionicon"
        color={styles.menu.icon.color}
        size={styles.menu.icon.fontSize}
        style={styles.menu.icon}
      />
      <View style={styles.currentLocation}>
        <Text style={styles.currentLocation.text}>Current location</Text>
        <View style={styles.location}>
          <Icon
            name="map-marker-alt"
            type="font-awesome-5"
            color={styles.location.icon.color}
            size={styles.location.icon.fontSize}
            style={styles.location.icon}
          />
          <Text style={styles.location.text}>Denapasar, Bali</Text>
        </View>
      </View>
      <Image
        source={{
          uri: 'https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png',
        }}
        style={styles.profile}
      />
    </View>
  );
}
