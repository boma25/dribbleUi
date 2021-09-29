import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const fontSize = {
  extraSmall: width * 0.025,
  small: width * 0.029,
  normal: width * 0.033,
  normal2: width * 0.037,
  normal3: width * 0.05,
  medium: width * 0.07,
  large: width * 0.09,
};

export default fontSize;
