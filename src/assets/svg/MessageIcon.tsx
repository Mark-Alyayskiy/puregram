import * as React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

const MessageIcon = () => (
  <Svg width={28} height={28} fill="none" stroke="#fff" viewBox="0 0 24 24">
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4M8 9h8M8 13h6" />
  </Svg>
);

export default MessageIcon;
