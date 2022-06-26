import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const CaptureIcon = () => (
  <Svg width={70} height={70} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2" />
    <Circle cx={12} cy={12} r={3} />
  </Svg>
);

export default CaptureIcon;
