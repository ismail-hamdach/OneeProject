import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from '../screens/Home';
import Saved from '../screens/Saved'
import Saved2 from '../screens/Saved2'
import Details from '../screens/Details'
import Search from '../screens/Search'
import Edit from '../screens/Edit'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SavedStack = createStackNavigator();




const HomeStackScreen = () => {
  return(
      <HomeStack.Navigator>
        <HomeStack.Screen name="ExplorePage" component={Home} options={{
          headerShown: false,
          
        }}/>
        <HomeStack.Screen name="SearchPage" component={Search} options={{
          headerShown: false,
        }} />
        <HomeStack.Screen name="DetailsPage" component={Details} />
        <HomeStack.Screen name="EditPage" component={Edit} />
        <HomeStack.Screen name="SavedPage2" component={Saved2} options={{
          headerShown: false,
        }} />
      </HomeStack.Navigator>
  )
}

const SavedStackScreen = () => {
  return(
      <SavedStack.Navigator>
        <SavedStack.Screen name="SavedPage1" component={Saved} options={{
          title: 'Enregistrés',
          headerShown: false,
        }}/>
        <HomeStack.Screen name="SavedPage2" component={Saved2} options={{
          headerShown: false,
        }} />
        <HomeStack.Screen name="SearchPage1" component={Search} options={{
          headerShown: false,
        }} />
        <SavedStack.Screen name="DetailsPage" component={Details} />
        <SavedStack.Screen name="EditPage" component={Edit} />
      </SavedStack.Navigator>
  )
}

export default function AppStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#3d3d3d',
        inactiveTintColor: '#575757',
        style: {
          paddingBottom: 5,
          // display: 'none',
        }
      }}>
        <Tab.Screen name="Explore" component={HomeStackScreen} options={{
                    tabBarLabel: 'Découvrir',
                    tabBarIcon: ({size, focused}) => (
                        <Entypo
                            name='magnifying-glass'
                            color={focused?'#3d3d3d':'#575757'}
                            size={size}
                        />
                    ),    
                }}
        />
        <Tab.Screen name="Saved" component={SavedStackScreen} options={{
                    tabBarLabel: 'Enregistrés',
                    tabBarIcon: ({focused, size}) => (
                        <MaterialCommunityIcons
                            name='bookmark-outline'
                            color={focused?'#3d3d3d':'#575757'}
                            size={size}
                        />
                    ),    
                }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
