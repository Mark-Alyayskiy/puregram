import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  color: string;
  focused: boolean;
};

const GreedIcon = ({color}: Props) => (
  <Svg width={44} height={44} fill="none" stroke={color} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Rect width={6} height={6} x={4} y={4} rx={1} />
    <Rect width={6} height={6} x={14} y={4} rx={1} />
    <Rect width={6} height={6} x={4} y={14} rx={1} />
    <Rect width={6} height={6} x={14} y={14} rx={1} />
  </Svg>
);

export default GreedIcon;
