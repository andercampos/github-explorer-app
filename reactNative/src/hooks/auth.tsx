import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

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

interface SignInCredentials {
  login: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const user = await AsyncStorage.getItem(
        '@reactNativeTest:user',
      );

      if (user) {
        setData({ ...JSON.parse(user) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ login }) => {
    const response = await api.get(`users/${login}`);

    await AsyncStorage.setItem(
      '@reactNativeTest:user', JSON.stringify(response.data),
    );
      
      setData(response.data);
    }, []);
    
  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@reactNativeTest:user');

    setData({} as User);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };