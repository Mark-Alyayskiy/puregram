import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  color: string;
};

const PersonIcon = ({color}: Props) => (
  <Svg width={30} height={30} fill="none" stroke={color} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={12} cy={7} r={4} />
    <Path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  </Svg>
);

export default PersonIcon;
