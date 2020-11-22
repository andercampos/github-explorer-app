import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 20px;
  border-bottom-width: 1px;
  border-color: #7070705A;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  border-color: #fff;
  border-width: 3px;
`;

export const Text = styled.Text`
  padding: 26px 0 42px;
  font-size: 16px;
  color: #fff;
`;

export const Marker = styled.View`
  position: absolute;
  top: 5px;
  left: 0;
  width: 10px;
  height: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #FFCE00;
`;

export const Button = styled(TouchableOpacity)`
  padding: 26px 16px 42px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)`
  color: #fff;
`;