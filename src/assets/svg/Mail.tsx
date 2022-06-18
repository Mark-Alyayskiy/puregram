import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const MailIcon = () => (
  <Svg width={25} height={25} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Rect width={18} height={14} x={3} y={5} rx={2} />
    <Path d="m3 7 9 6 9-6" />
  </Svg>
);

export default MailIcon;
