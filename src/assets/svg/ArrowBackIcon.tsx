import * as React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

const ArrowBackIcon = () => (
  <Svg width={44} height={44} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M5 12h14M5 12l6 6M5 12l6-6" />
  </Svg>
);

export default ArrowBackIcon;
