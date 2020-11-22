import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  padding: 26px 18px 26px 0;
  background-color: #1F1F1F;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)`
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)`
  color: #ffffff;
`;

export const Text = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
`;