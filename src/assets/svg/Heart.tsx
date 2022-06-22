import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartIcon = () => (
  <Svg width={30} height={30} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M19.5 13.572 12 21l-7.5-7.428m0 0A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572" />
  </Svg>
);

export default HeartIcon;
