import React from 'react';

import { Container, Text, SecundaryText, Marker } from './styles';

interface IInfoProps {
  name: string;
  email: string;
  location: string;
  bio: string;
  isBio?: boolean;
}

const Info: React.FC<IInfoProps> = ({ name, email, location, bio, isBio }) => (
  <Container isBio={isBio}>
    <Marker/>
    {!isBio ? (
      <>
        <Text>{name}</Text>
        {email && (
          <SecundaryText>{email}</SecundaryText>
        )}
        {location && (
          <SecundaryText>{location}</SecundaryText>
        )}
      </>
    ) : (
      <>
        <Text>BIO</Text>
        <SecundaryText isBio>{bio ? bio : 'Usuário não possui BIO'}</SecundaryText>
      </>
    )}
  </Container>
);

export default Info;