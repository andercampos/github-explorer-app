import React from 'react';
import { ScrollView } from 'react-native';

import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Details from '../../components/Details';

import { Container } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          isProfile={false}
          login={user.login}
          avatar_url={user.avatar_url}
        />
        
        <Info 
          name={user.name ? user.name : 'Usuário sem nome'} 
          email={user.email}
          location={user.location} 
          bio={user.bio} 
          isBio={false}
        />

        <Details 
          followers={user.followers}
          following={user.following}
          public_repos={user.public_repos}
        />

        <Info 
          name={user.name} 
          email={user.email}
          location={user.location} 
          bio={user.bio} 
          isBio
        />
      </ScrollView>
    </Container>
  );
};

export default Home;