import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  color: string;
  focused: boolean;
};

const FeedIcon = ({color}: Props) => (
  <Svg width={44} height={44} fill="none" stroke={color} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Rect width={16} height={6} x={4} y={4} rx={2} />
    <Rect width={16} height={6} x={4} y={14} rx={2} />
  </Svg>
);

export default FeedIcon;
