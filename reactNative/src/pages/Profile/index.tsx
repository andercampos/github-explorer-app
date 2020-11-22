import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Details from '../../components/Details';

import { Container } from './styles';

interface User {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: string;
  repos_url: string;
  public_gists: string;
  followers: string;
  following: string;
}

interface RouteParams {
  login: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<User>({} as User);

  const route = useRoute();
  const params = route.params as RouteParams;

  useEffect(() => {
    async function loadUserData(): Promise<void> {
      const response = await api.get(`users/${params.login}`);
      
      setData(response.data);
    };
    loadUserData();
  }, []);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          isProfile
          login={data.login}
          avatar_url={data.avatar_url}
        />

        <Info 
          name={data.name} 
          email={data.email}
          location={data.location} 
          bio={data.bio} 
          isBio={false}
        />

        <Details 
          followers={data.followers}
          following={data.following}
          public_repos={data.public_repos}
        />

        <Info 
          name={data.name} 
          email={data.email}
          location={data.location} 
          bio={data.bio} 
          isBio
          />
      </ScrollView>
    </Container>
  );
};

export default Profile;