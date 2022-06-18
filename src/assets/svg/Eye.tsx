import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Eye = () => (
  <Svg width={25} height={25} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={12} cy={12} r={2} />
    <Path d="M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7" />
  </Svg>
);

export default Eye;
