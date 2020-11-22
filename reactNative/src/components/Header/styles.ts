import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IIconProps {
  type: 'dashboard' | 'profile' | 'save';
}

interface IContainerProps {
  isProfile?: boolean;
}

const iconColor = {
  dashboard: css`
    color: #D03434;
  `,
  profile: css`
    color: #FFFFFF;
  `,
  save: css`
    color: #5CBC29;
  `,
}

export const Container = styled.View<IContainerProps>`
  position: relative;
  height: ${props => props.isProfile ? 142 : 126}px;
  padding: 24px 0;

  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  background-color: #1F1F1F;
`;

export const Text = styled.Text<IContainerProps>`
  color: #FFFFFF;
  font-size: 17px;
  font-weight: bold;
  padding-left: ${props => props.isProfile ? 50 : 12}px;
`;

export const SecundaryText = styled.Text`
  font-size: 17px;
  font-weight: 300;
  color: #FFFFFF;
  margin-right: 12px;
`;

export const Button = styled(TouchableOpacity)`
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon)<IIconProps>`
  ${props => iconColor[props.type]};
`;

export const Avatar = styled.Image`
  position: absolute;
  width: 115px;
  height: 115px;
  border-radius: 57.5px;
  border-color: #fff;
  border-width: 3px;
  margin-top: 64px;
`;