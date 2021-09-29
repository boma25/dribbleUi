import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import {Platform, PermissionsAndroid} from 'react-native';

const getLocation = async () => {
  const permission =
    Platform.OS === 'ios'
      ? await Geolocation.requestAuthorization('whenInUse')
      : await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Location',
            message: 'Dribble ui would like to make use of your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
  if (
    permission === 'granted' ||
    permission === PermissionsAndroid.RESULTS.GRANTED
  ) {
    try {
      const geolocation = new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => resolve(position),
          error => {
            reject(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      });
      const position = await geolocation;
      const {latitude, longitude} = position.coords;

      Geocoder.fallbackToGoogle('AIzaSyAzkoXycET45izo91NvrNp0iN8h4IVzM-Q');
      const res = await Geocoder.geocodePosition({
        lat: latitude,
        lng: longitude,
      });
      return res[0];
    } catch (error) {
      console.log(error);
    }
  }
};

export {getLocation};
