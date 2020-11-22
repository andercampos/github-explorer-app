import styled from 'styled-components/native';

interface IInfoProps {
  isBio?: boolean;
}

export const Container = styled.View<IInfoProps>`
  margin-top: ${props => props.isBio ? 53 : 103}px;
  padding: 0 24px;
  margin-bottom: ${props => props.isBio ? 40 : 0}px;
`;

export const Text = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;
`;

export const SecundaryText = styled.Text<IInfoProps>`
  margin-top: ${props => props.isBio ? 14 : 4}px;
  font-size: 17px;
  font-weight: 300;
  color: #FFFFFF;
`;

export const Marker = styled.View`
  position: absolute;
  left: 0;
  width: 10px;
  height: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #FFCE00;
`;