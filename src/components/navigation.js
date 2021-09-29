import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import PersonSvg from '../assets/navigation/person';
import HomeSvg from '../assets/navigation/home';
import SettingsSvg from '../assets/navigation/settings';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabPress={() => alert('pressed')}
        screenListeners={{
          tabPress: e => {
            const {target} = e;
            !target.toLowerCase().includes('home') && e.preventDefault();
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <HomeSvg fill={focused ? colors.PriColor : colors.Black} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Dummy}
          options={{
            tabBarIcon: ({focused}) => (
              <PersonSvg fill={focused ? colors.PriColor : colors.Black} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Dummy}
          options={{
            tabBarIcon: ({focused}) => (
              <SettingsSvg fill={focused ? colors.PriColor : colors.Black} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Dummy = () => <View />;

export default AppNavigator;
