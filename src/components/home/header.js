import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../utils/colors';
import fontSize from '../../utils/fontSizes';
import SearchSvg from '../../assets/home/search';
import {getLocation} from '../../helpers/geolocation.helper';

const Header = () => {
  const [location, setLocation] = useState('lagos');

  const _getLocation = async () => {
    const location = await getLocation();
    setLocation(location.country);
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
          <Text style={styles.locationText}>{location}</Text>
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
  locationText: {
    fontSize: fontSize.medium,
    fontWeight: '700',
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
});

export default Header;
