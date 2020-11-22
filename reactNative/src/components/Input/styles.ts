import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  min-width: 100%;
  max-width: 100%;
  height: 60px;
  padding: 0 16px;
  margin-top: 48px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #535353;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #EB2D2D;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #FFCE00;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 20px;
  font-family: 'Roboto-Regular';
`;

export const Error = styled.Text`
  padding-right: 16px;
  color: #EB2D2D;
  font-size: 14px;
`;
