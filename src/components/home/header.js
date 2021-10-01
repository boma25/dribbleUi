import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../utils/colors';
import fontSize from '../../utils/fontSizes';
import SearchSvg from '../../assets/home/search';
import {getLocation} from '../../helpers/geolocation.helper';

const Header = () => {
  const [location, setLocation] = useState('searching');

  const _getLocation = async () => {
    try {
      const location = await getLocation();
      const {locality, subLocality} = location;
      setLocation({locality, subLocality});
    } catch (error) {
      setLocation('not found');
    }
  };
  useEffect(() => {
    _getLocation();
  }, []);
  return (
    <View style={styles.header}>
      <View style={styles.detailsContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg',
          }}
          style={styles.userImage}
        />
        <View>
          <Text style={styles.helloText}>Hello</Text>
          <View style={styles.locationTextContainer}>
            <Text style={styles.subLocationText}>
              {location.subLocality ? location.subLocality : location}
            </Text>
            {location.locality && (
              <Text style={styles.locationText}>-({location.locality})</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchSvg />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  detailsContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '70%',
    alignItems: 'center',
  },
  userImage: {
    width: '17%',
    height: '90%',
    borderRadius: 30,
    marginRight: '5%',
  },
  helloText: {
    fontSize: fontSize.normal,
  },
  subLocationText: {
    fontSize: fontSize.normal2,
    fontWeight: '700',
  },
  locationText: {
    fontSize: fontSize.small,
    fontWeight: '600',
  },
  searchContainer: {
    backgroundColor: colors.White,
    padding: '5%',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: colors.Black,
  },
  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
