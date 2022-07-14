import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  color: string;
  focused: boolean;
};

const DeleteIcon = ({color}: Props) => (
  <Svg width={34} height={34} fill="none" stroke={color} viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
  </Svg>
);

export default DeleteIcon;
