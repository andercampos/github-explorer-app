import React from 'react';

import { Container, Text, SecundaryText, DetailsContainer } from './styles';

interface IDetailsProps {
  followers: string;
  following: string;
  public_repos: string;
}

const Details: React.FC<IDetailsProps> = ({ followers, following, public_repos }) => (
  <Container>
    <DetailsContainer >
      <Text>{followers ? followers : 0}</Text>
      <SecundaryText>Seguidores</SecundaryText>
    </DetailsContainer>

    <DetailsContainer>
      <Text>{following ? following : 0}</Text>
      <SecundaryText>Seguindo</SecundaryText>
    </DetailsContainer>

    <DetailsContainer>
      <Text>{public_repos ? public_repos : 0}</Text>
      <SecundaryText>Repos</SecundaryText>
    </DetailsContainer>
  </Container>
);


export default Details;