import React, {useEffect, useMemo, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import getLocation from '../../../utils/getLocation';
import styles from './style';

export default function App() {
  const [locationData, setLocationData] = useState();

  useEffect(() => {
    location;
    getLocation().then(res => setLocationData(res));
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png',
        }}
        style={styles.profile}
      />
      <View style={styles.currentLocation}>
        <Text style={styles.currentLocation.text}>مکان کنونی</Text>
        <View style={styles.location}>
          <Text style={styles.location.text}>تهران، ایران</Text>
          <Icon
            name="map-marker-alt"
            type="font-awesome-5"
            color={styles.location.icon.color}
            size={styles.location.icon.fontSize}
            style={styles.location.icon}
          />
        </View>
      </View>
      <Icon
        name="grid-outline"
        type="ionicon"
        color={styles.menu.icon.color}
        size={styles.menu.icon.fontSize}
        style={styles.menu.icon}
      />
    </View>
  );
}
