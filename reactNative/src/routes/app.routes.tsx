import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import Repository from '../pages/Repository';
import Profile from '../pages/Profile';

const App = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  function FollowersRoute() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Followers" 
          component={Followers}
        />

        <Stack.Screen 
          name="Profile" 
          component={Profile}
        />
      </Stack.Navigator>
    );
  };

  function FollowingRoute() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen 
          name="Following" 
          component={Following}
        />

        <Stack.Screen 
          name="Profile" 
          component={Profile}
        />
      </Stack.Navigator>
    );
  };

  return (
    <App.Navigator
      tabBarOptions={{
        style: {
          height: 75,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Roboto-Regular',
          fontSize: 15,
          marginTop: 5,
        },
        inactiveTintColor: '#A5A5A5',
        activeTintColor: '#000000',
        keyboardHidesTabBar: true,
      }}
    >
      <App.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <FeatherIcon
                name="home"
                size={size}
                color={focused ? '#000000' : '#A5A5A5'}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Repos"
        component={Repository}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <FeatherIcon
                name="github"
                size={size}
                color={focused ? '#000000' : '#A5A5A5'}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Seguidores"
        component={FollowersRoute}
        options={{  
          tabBarIcon: ({ size, focused }) => {
            return (
              <FeatherIcon
                name="users"
                size={size}
                color={focused ? '#000000' : '#A5A5A5'}
              />
            );
          },
        }}
      />
      <App.Screen
        name="Seguindo"
        component={FollowingRoute}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <FeatherIcon
                name="users"
                size={size}
                color={focused ? '#000000' : '#A5A5A5'}
              />
            );
          },
        }}
      />
    </App.Navigator>
  );
};

export default AppRoutes;