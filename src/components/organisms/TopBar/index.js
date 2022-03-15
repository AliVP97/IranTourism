import React, {useEffect, useMemo, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {getLocation, geocode} from '../../../utils';
import styles from './style';

export default function App() {
  const [locationData, setLocationData] = useState();
  const [placeName, setPlaceName] = useState('در حال مکانیابی');

  useEffect(() => {
    getLocation().then(res => {
      setLocationData(res);
      geocode(res.coords.latitude, res.coords.longitude).then(
        ({data: {features}}) => {
          let cityName = features.filter(feature =>
            feature.id.includes('place'),
          )[0].text;

          let provincName = features
            .filter(feature => feature.id.includes('region'))[0]
            .text.replace('استان ', '');

          setPlaceName(`${cityName}، ${provincName}`);
        },
      );
    });
  }, []);

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
        <Text style={styles.currentLocation.text}>مکان کنونی</Text>
        <View style={styles.location}>
          <Icon
            name="map-marker-alt"
            type="font-awesome-5"
            color={styles.location.icon.color}
            size={styles.location.icon.fontSize}
            style={styles.location.icon}
          />
          <Text style={styles.location.text}>{placeName}</Text>
        </View>
      </View>
      <Image
        source={{
          uri: 'https://unsplash.com/photos/ZHvM3XIOHoE/download?force=true&w=640',
        }}
        style={styles.profile}
      />
    </View>
  );
}
