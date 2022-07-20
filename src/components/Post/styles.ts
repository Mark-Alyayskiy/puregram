import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';

export const Root = styled.View`
  min-height: 400px;
  width: 100%;
  background-color: #181a20;
  max-width: 100%;
  border-radius: 25px;
  margin-bottom: 10px;
`;
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const UserButton = styled.TouchableOpacity`
  margin-left: 5%;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const MenuButton = styled.TouchableOpacity`
  margin-right: 5%;
`;
export const PostInfo = styled.View`
  position: absolute;
  height: 15%;
  width: 100%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding: 0 10px;
  padding-top: 10px;
  justify-content: space-between;
`;
export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;
export const Username = styled.Text`
  color: #fff;
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
`;
export const ImageContainer = styled.View`
  align-self: center;
  width: 90%;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
`;
export const ControlContainer = styled.View`
  width: 50%;
  align-self: flex-start;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: #fff;
  margin: 0 4px;
`;
export const Timestamp = styled.Text`
  margin-bottom: 10px;
  align-items: center;

  color: #fff;
  font-size: 12px;
`;
export const PostFooter = styled.View`
  width: 90%;
  flex-direction: row;
  align-self: center;
  margin-top: 5px;
`;

export const FooterUsernameLabel = styled.Text`
  color: #fff;
  margin-right: 10px;
  font-weight: bold;
  font-size: 15px;
`;

export const ItemContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 30px;
`;
