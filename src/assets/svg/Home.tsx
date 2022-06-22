import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color: string;
};

const HomeIcon = ({color}: Props) => (
  <Svg width={30} height={30} fill="none" stroke={color} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
  </Svg>
);

export default HomeIcon;
