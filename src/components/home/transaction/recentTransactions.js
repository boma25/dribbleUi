import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TransactionCard from './transactionCard';
import {recentTransactions} from '../../../utils/data';
import colors from '../../../utils/colors';
import fontSize from '../../../utils/fontSizes';

const RecentTransactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Transactions</Text>
      <View>
        {recentTransactions.map((value, index) => (
          <TransactionCard key={index} {...value} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '10%',
    paddingHorizontal: '5%',
  },
  heading: {
    fontSize: fontSize.medium,
    fontWeight: '600',
    color: colors.BodyTextsGrey,
    marginBottom: '5%',
  },
});

export default RecentTransactions;
