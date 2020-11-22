import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const Button = styled(RectButton)`
  min-width: 100%;
  height: 60px;
  margin-top: 16px;
  background: #FFCE00;
  border-radius: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #030202;
`;

export const Icon = styled(FeatherIcon)`
  color: #030202;
  margin-left: 12px;
`;