import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import SmallHeader from '../../components/SmallHeader';

import { 
  Container, 
  Title, 
  Text, 
  Stars, 
  Icon, 
  Marker, 
  Availability,
  Card
} from './styles';

interface IRepositoryProps {
  id: number;
  name: string;
  description: string | null;
  private: boolean;
  stargazers_count: number;
}

const Repository: React.FC = () => {
  const [repositories, setRepositories] = useState<IRepositoryProps[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    async function loadRepositories(): Promise<void> {
      const response = await api.get(`${user.repos_url}`);

      setRepositories(response.data);
    }
    loadRepositories();
  }, [user.name])

  return (
    <Container>
      <SmallHeader quantity={user.public_repos} title="repositórios"/>
      <FlatList
        data={repositories}
        showsVerticalScrollIndicator={false}
        keyExtractor={repository => repository.name}
        renderItem={({item: repository}) => (
          <Card>
            <Marker/>
            <Title>{repository.name}</Title>
            <Text>{repository.description ? repository.description : 'Sem descrição'}</Text>

            <Stars>
              <Icon name="star" size={18}/>
              <Text>{repository.stargazers_count}</Text>
            </Stars>

            <Availability>
              <Icon 
                isPrivate={repository.private} 
                name={repository.private ? 'lock' : 'unlock'}
                size={18}
              />
            </Availability>
          </Card>
        )}
      /> 
    </Container>
  );
};


export default Repository;