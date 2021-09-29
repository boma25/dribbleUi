import React from 'react';
import {SafeAreaView, StatusBar, ScrollView, StyleSheet} from 'react-native';
import colors from '../utils/colors';
import Header from '../components/home/header';
import Services from '../components/home/service';
import RecentTransactions from '../components/home/transaction/recentTransactions';
import CardCarousel from '../components/home/card/cardCarousel';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header />
        <CardCarousel />
        <Services />
        <RecentTransactions />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LightGrey,
    paddingVertical: '5%',
    height: '100%',
  },
});

export default Home;
