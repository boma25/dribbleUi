import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {cardDetails} from '../../../utils/data';
import CreditCard from './creditCard';

let {width} = Dimensions.get('window');

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const _handleScroll = event => {
    setActiveIndex(
      Math.round(
        event.nativeEvent.contentOffset.x /
          event.nativeEvent.layoutMeasurement.width,
      ),
    );
  };

  const getWidth = index => {
    return activeIndex === 1 && index === 0
      ? width + width * 0.01
      : width - width * 0.1;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        horizontal
        pagingEnabled
        onScroll={_handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {cardDetails.map((value, index) => (
          <CreditCard key={index} {...value} scrollWidth={getWidth(index)} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '5%',
    width: width,
    height: '22%',
  },
  scroll: {
    width: width,
  },
});

export default CardCarousel;
