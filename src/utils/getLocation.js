import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';

async function getPermission() {
  const hasLocationPermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Geolocating App',
      message: 'Let Geolocating App access to your location ',
    },
  );

  return hasLocationPermission;
}

const currentPosition = new Promise((res, rej) => {
  Geolocation.getCurrentPosition(
    position => {
      res(position);
    },
    error => {
      // See error code charts below.
      console.error(error.code, error.message);
      rej(error);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
});

async function getCurrentPosition() {
  let result;
  await currentPosition.then(res => (result = res));

  return result;
}

export default async function getLocation() {
  let geoData;

  const hasLocationPermission = await getPermission();

  if (hasLocationPermission === 'granted') {
    await getCurrentPosition().then(res => (geoData = res));
  } else {
    console.error(`Location Permission Status: ${hasLocationPermission}`);
  }

  return geoData;
}
