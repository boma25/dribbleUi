import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../utils/colors';
import fontSize from '../../utils/fontSizes';
import {servicesList} from '../../utils/data';

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Service</Text>
      <View style={styles.serviceContainer}>
        {servicesList.map((value, index) => (
          <View key={index}>
            <View
              style={{
                ...styles.serviceImageContainer,
                backgroundColor: value.color,
              }}>
              <value.icon />
            </View>
            <Text style={styles.serviceText}>{value.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: fontSize.normal3,
    fontWeight: '600',
    color: colors.BodyTextsGrey,
  },
  serviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  serviceImageContainer: {
    borderRadius: 7,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceText: {
    textAlign: 'center',
    marginTop: '10%',
    fontSize: fontSize.normal,
    fontWeight: '600',
  },
  container: {
    marginTop: '5%',
    paddingHorizontal: '5%',
  },
});

export default Services;
