import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';

const getLocation = async () => {
  const permission = await Geolocation.requestAuthorization('whenInUse');
  if (permission === 'granted') {
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
