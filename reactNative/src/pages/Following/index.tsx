import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import FollowerAndFollowing from '../../components/FollowerAndFollowing';
import SmallHeader from '../../components/SmallHeader';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface IFollowingProps {
  login: string;
  avatar_url: string;
}

const Following: React.FC = () => {
  const [following, setFollowing] = useState<IFollowingProps[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    async function loadFollowing(): Promise<void> {
      const response = await api.get(`users/${user.login}/following`);
       
      setFollowing(response.data);
    };
    loadFollowing();
  }, []);

  return (
    <Container>
      <SmallHeader quantity={user.following} title="seguindo"/>
      <FlatList
        data={following}
        showsVerticalScrollIndicator={false}
        keyExtractor={follow => follow.login}
        renderItem={({item: follow}) => (
          <FollowerAndFollowing 
            login={follow.login}
            avatar_url={follow.avatar_url}
          />
        )}
      />
    </Container>
  );
};

export default Following;