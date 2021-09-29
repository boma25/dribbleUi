import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      height={20}
      viewBox="0 0 24 24"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      {...props}>
      <Path d="M19.5 18c-2.481 0-4.5-2.019-4.5-4.5S17.019 9 19.5 9H22V7c0-1.103-.897-2-2-2h-1V3c0-1.103-.897-2-2-2H3A2.998 2.998 0 00.051 3.499C.029 3.581 0 3.661 0 3.75V19c0 1.654 1.346 3 3 3h17c1.103 0 2-.897 2-2v-2zM2 4c0-.551.448-1 1-1h14v2H3c-.552 0-1-.449-1-1z" />
      <Path d="M23.25 10.5H19.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h3.75a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm-3.75 4a1 1 0 110-2 1 1 0 010 2z" />
    </Svg>
  );
}

export default SvgComponent;
