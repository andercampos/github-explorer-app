import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Container, Button, Icon, Text } from './styles';

interface ISmallHeaderProps {
  quantity: string;
  title: string;
}

const SmallHeader: React.FC<ISmallHeaderProps> = ({ quantity, title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-left" size={24}/>
      </Button>
      <Text>{quantity} {title}</Text>
      <View />
    </Container>
  );
};

export default SmallHeader;