import * as React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

const DotsIcon = () => (
  <Svg width={34} height={34} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={5} cy={12} r={1} />
    <Circle cx={12} cy={12} r={1} />
    <Circle cx={19} cy={12} r={1} />
  </Svg>
);

export default DotsIcon;
