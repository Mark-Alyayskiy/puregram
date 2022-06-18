import * as React from 'react';
import Svg, {Path, Rect, Circle} from 'react-native-svg';

const Password = () => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#fff"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Rect x={5} y={11} width={14} height={10} rx={2} />
    <Circle cx={12} cy={16} r={1} />
    <Path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Svg>
);

export default Password;
