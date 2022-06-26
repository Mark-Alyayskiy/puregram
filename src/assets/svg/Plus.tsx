import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  color: string;
};

const PlusIcon = ({color}: Props) => (
  <Svg width={30} height={30} fill="none" stroke={color} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Rect width={16} height={16} x={4} y={4} rx={2} />
    <Path d="M9 12h6M12 9v6" />
  </Svg>
);

export default PlusIcon;
