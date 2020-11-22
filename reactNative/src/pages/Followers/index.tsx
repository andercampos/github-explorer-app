import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import FollowerAndFollowing from '../../components/FollowerAndFollowing';
import SmallHeader from '../../components/SmallHeader';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface IFollowersProps {
  login: string;
  avatar_url: string;
}

const Followers: React.FC = () => {
  const [followers, setFollowers] = useState<IFollowersProps[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    async function loadFollowers(): Promise<void> {
      const response = await api.get(`${user.followers_url}`);

      setFollowers(response.data);
    };
    loadFollowers();
  }, [])

  return (
    <Container>
      <SmallHeader quantity={user.followers} title="seguidores"/>
      <FlatList
        data={followers}
        showsVerticalScrollIndicator={false}
        keyExtractor={follower => follower.login}
        renderItem={({item: follower}) => (
          <FollowerAndFollowing 
            login={follower.login}
            avatar_url={follower.avatar_url}
          />
        )}
      />
    </Container>
  );
};

export default Followers;