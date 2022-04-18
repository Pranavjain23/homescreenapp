import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Ionicons from '@expo/vector-icons';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './components'

const Tabs = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Tabs.Navigator
      barStyle={{ backgroundColor: theme.colors.primary}}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color="black"}) => {
          let iconName:any;

          if (route.name == 'Home') {
            iconName = focused
            ? 'home-outline'
            : 'home-outline';
          } else if (route.name == 'Search') {
            iconName = focused
            ? 'search-outline'
            : 'search-outline';
          }
          else if (route.name == 'Library') {
            iconName = focused
            ? 'library-outline'
            : 'library-outline';
          }
          else if (route.name == 'Premium') {
            iconName = focused
            ? 'premium-outline'
            : 'premium-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor : 'tomato',
        inactiveTintColor: 'black',
        showLabel:true,
      }}

      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Search" component={Home} />
        <Tabs.Screen name="Library" component={Home} />
        <Tabs.Screen name="Premium" component={Home} />
      </Tabs.Navigator>
    </NavigationContainer>
  </ThemeProvider>
  );
}

