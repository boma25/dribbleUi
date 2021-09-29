import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../../utils/colors';
import fontSize from '../../../utils/fontSizes';

const TransactionCard = ({image, title, description, amount, color}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Image source={{uri: image}} style={styles.transactionImage} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <Text style={{...styles.amount, color: color}}>${amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: fontSize.normal,
    fontWeight: '600',
  },
  title: {
    fontSize: fontSize.normal3,
    fontWeight: '500',
    color: colors.BodyTextsGrey,
  },
  description: {
    fontSize: fontSize.normal,
    marginTop: '2%',
    color: colors.BodyTextsGrey,
  },
  transactionImage: {
    width: 30,
    height: 30,
    marginRight: '3%',
    borderRadius: 10,
  },
});

export default TransactionCard;
