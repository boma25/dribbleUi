import numeral from 'numeral';
import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import colors from '../../../utils/colors';
import fontSize from '../../../utils/fontSizes';

let {width} = Dimensions.get('window');
width = width - width * 0.1;

const CreditCard = ({
  color,
  balance,
  type_image,
  name,
  card_number,
  exp,
  scrollWidth,
}) => {
  return (
    <View
      style={{
        ...styles.cardContainer,
        backgroundColor: color,
        width: scrollWidth || width,
      }}>
      <View style={styles.section}>
        <Text style={styles.currentBalance}>Current Balance</Text>
        <Image source={{uri: type_image}} style={styles.cardImage} />
      </View>
      <View style={styles.balanceContainer}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currency}>USD</Text>
        </View>
        <Text style={styles.balance}>
          {numeral(balance).format('0,,000.00')}
        </Text>
      </View>
      <Text style={styles.cardNumber}>{card_number}</Text>
      <View style={styles.section}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text style={styles.expTitle}>Exp. Date</Text>
          <Text style={styles.exp}>{exp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: '2%',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentBalance: {
    fontSize: fontSize.normal,
    color: colors.White,
  },
  cardImage: {
    width: 20,
    height: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
  },
  currencyContainer: {
    marginRight: 3,
    padding: '3%',
    borderRadius: 5,
    backgroundColor: colors.Grey8,
  },
  currency: {
    fontSize: fontSize.normal,
    color: colors.White,
  },
  balance: {
    fontSize: fontSize.normal2,
    color: colors.White,
    fontWeight: '500',
  },
  cardNumber: {
    fontSize: fontSize.normal3,
    fontWeight: '500',
    color: colors.White,
    //   marginBottom: '5%',
  },
  name: {
    color: colors.White,
  },
  expTitle: {
    fontSize: fontSize.small,
    color: colors.White,
    textAlign: 'center',
  },
  exp: {
    fontSize: fontSize.normal,
    color: colors.White,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default CreditCard;
