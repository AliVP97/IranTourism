import React, {useEffect} from 'react';
import {Image, Text, View, PermissionsAndroid} from 'react-native';
import {Icon} from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';

export default function App() {
  const permissionHandler = async () => {
    const hasLocationPermission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocating App',
        message: 'Let Geolocating App access to your location ',
      },
    );

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

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
