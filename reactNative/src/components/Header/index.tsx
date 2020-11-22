import React, { useCallback } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { 
  Container, 
  Text, 
  SecundaryText,
  Button, 
  Icon, 
  Avatar, 
} from './styles';

interface IHeaderProps {
  login: string;
  avatar_url: string;
  isProfile: boolean;
}

const Header: React.FC<IHeaderProps> = ({ login, avatar_url, isProfile }) => {
  const { signIn , signOut } = useAuth();
  const navigation = useNavigation();

  const handlePressAction = useCallback(async (login: string) => {
    if (!isProfile) {
      signOut();
    } else {
      await signIn({
        login,
      });

      Alert.alert(
        `Usuário alterado para ${login}`,
      );
    }   
  }, [signIn]);

  return (
    <Container isProfile={isProfile}>
      {isProfile && (
        <Button onPress={() => navigation.goBack()}>
          <Icon type="profile" name="arrow-left" size={24}/>
        </Button>
      )}
      <Text isProfile={isProfile}>#{login}</Text>
      <Button onPress={() => handlePressAction(login)}>
        <SecundaryText>{isProfile ? 'Salvar' : 'Sair'}</SecundaryText>
        <Icon 
          type={isProfile ? 'save' : 'dashboard'} 
          name={isProfile ? 'log-in' : 'log-out'} 
          size={20}
        />
      </Button>

      <View style={{position: "absolute", left: 0, right: 0, alignItems: "center"}}>
        <Avatar source={{ uri: avatar_url }} />
     </View>
      
    </Container>
  );
};

export default Header;