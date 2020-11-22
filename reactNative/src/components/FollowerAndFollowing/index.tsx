import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Marker, Avatar, Text, Button, Icon } from './styles';

interface IFollowerAndFollowingProps {
  login: string;
  avatar_url: string;
}

const FollowerAndFollowing: React.FC<IFollowerAndFollowingProps> = ({
  login, 
  avatar_url,
}) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <Marker/>
      <Avatar source={{ uri: avatar_url }} />

      <Text>#{login}</Text>

      <Button onPress={() => route.name === 'Followers' ? navigation.navigate('Seguidores', { 
          screen: 'Profile',
          params: { login },
        }) : navigation.navigate('Seguindo', {
          screen: 'Profile',
          params: { login },
        })}>
        <Icon name="arrow-right" size={24}/>
      </Button>
    </Container>
  );
};

export default FollowerAndFollowing;