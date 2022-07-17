import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowBackIcon = ({width, height}: {width?: number; height?: number}) => (
  <Svg
    width={width || 44}
    height={height || 44}
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M5 12h14M5 12l6 6M5 12l6-6" />
  </Svg>
);

export default ArrowBackIcon;
