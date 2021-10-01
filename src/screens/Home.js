import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../utils/colors';
import Header from '../components/home/header';
import Services from '../components/home/service';
import RecentTransactions from '../components/home/transaction/recentTransactions';
import CardCarousel from '../components/home/card/cardCarousel';

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollStyle}
          showsVerticalScrollIndicator={false}>
          <Header />
          <CardCarousel />
          <Services />
          <RecentTransactions />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: '5%',
  },
  scrollStyle: {
    backgroundColor: colors.LightGrey,
    height: '100%',
  },
});

export default Home;
