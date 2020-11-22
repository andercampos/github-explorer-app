import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IIconProps {
  color?: string;
  isPrivate?: boolean;
}

export const Container = styled.View`
  background: #292929;
  margin-bottom: 75px;
`;

export const Card = styled.View`
  position: relative;
  margin-top: 20px;
  padding: 12px 28px 34px;
  border-bottom-width: 1px;
  border-color: #7070705A;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  color: #fff;
`;

export const Stars = styled.View`
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
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

export const Availability = styled.View`
  position: absolute;
  right: 24px;
  bottom: 32px;
`;


export const Icon = styled(FeatherIcon)<IIconProps>`
  margin-right: 9px;

  ${props => props.isPrivate === false ? css`
    color: #63BF1F;
  ` : css`
    color: #CC042A;
  `}

  ${props => props.isPrivate === undefined && css`
    color: #FFCE00;
  `};
`;