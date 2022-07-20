import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartIcon = ({isActive}: {isActive?: boolean}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke={isActive ? '#e51723' : '#fff'}
    viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path
      d="M19.5 13.572 12 21l-7.5-7.428m0 0A5 5 0 1 1 12 7.006a5 5 0 1 1 7.5 6.572"
      fill={isActive ? '#e51723' : 'none'}
    />
  </Svg>
);

export default HeartIcon;
