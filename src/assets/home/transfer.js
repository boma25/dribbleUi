import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      height={20}
      viewBox="0 0 24 24"
      width={20}
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M23.25 15a.75.75 0 01-.75-.75A5.256 5.256 0 0017.25 9H10v3.25c0 .66-.794.994-1.268.542l-5.5-5.25a.749.749 0 010-1.084l5.5-5.25C9.208.754 10 1.092 10 1.75V5h6.25C20.523 5 24 8.477 24 12.75v1.5a.75.75 0 01-.75.75z" />
      <Path d="M14 22.25V19H7.75C3.477 19 0 15.523 0 11.25v-1.5a.75.75 0 011.5 0A5.256 5.256 0 006.75 15H14v-3.25a.75.75 0 011.268-.542l5.5 5.25a.749.749 0 010 1.084l-5.5 5.25c-.477.454-1.268.116-1.268-.542z" />
    </Svg>
  );
}

export default SvgComponent;
