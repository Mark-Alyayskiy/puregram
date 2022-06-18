import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const Name = () => (
  <Svg width={25} height={25} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Circle cx={15} cy={15} r={3} />
    <Path d="M13 17.5V22l2-1.5 2 1.5v-4.5" />
    <Path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3M6 15h2" />
  </Svg>
);

export default Name;
