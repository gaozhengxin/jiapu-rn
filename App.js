import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native'
import "react-native-url-polyfill/auto"

import UserProtal from './pages/UserProtal'
import Home from './pages/Home'
import PersonHome from './pages/PersonHome'
import Person from './pages/Person'
import StoryHome from './pages/StoryHome'
import Story from './pages/Story'
import EditPerson from './pages/EditPerson'
import EditStory from './pages/EditStory'
import Album from './pages/Album'
import Charts from './pages/Charts'
import News from './pages/News'
import Reunion from './pages/Reunion'
import Memorial from './pages/Memorial'
import Calendar from './pages/Calendar'
import Health from './pages/Health'

import './i18n';

import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

const HeaderRight = () => (
  <Button
    onPress={() => alert('This is a button!')}
    title="..."
    color="#000"
  />
)

//export const AuthenticationContext = React.createContext();

function App() {
  const { t, i18n } = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="userProtal" component={UserProtal} options={{ title: t('UserProtal'), headerRight: HeaderRight }} />
        <Stack.Screen name="home" component={Home} options={{ title: "", headerRight: HeaderRight }} />
        <Stack.Screen name="personHome" component={PersonHome} options={{ title: t('Person'), headerRight: HeaderRight }} />
        <Stack.Screen name="person" component={Person} options={{ title: t('Person'), headerRight: HeaderRight }} />
        <Stack.Screen name="person/edit" component={EditPerson} options={{ title: t('EditPerson'), headerRight: HeaderRight }} />
        <Stack.Screen name="storyHome" component={StoryHome} options={{ title: t('Story'), headerRight: HeaderRight }} />
        <Stack.Screen name="story" component={Story} options={{ title: t('Story'), headerRight: HeaderRight }} />
        <Stack.Screen name="story/edit" component={EditStory} options={{ title: t('EditStory'), headerRight: HeaderRight }} />
        <Stack.Screen name="album" component={Album} options={{ title: t('Album'), headerRight: HeaderRight }} />
        <Stack.Screen name="charts" component={Charts} options={{ title: t('Charts'), headerRight: HeaderRight }} />
        <Stack.Screen name="news" component={News} options={{ title: t('News'), headerRight: HeaderRight }} />
        <Stack.Screen name="reunion" component={Reunion} options={{ title: t('Reunion'), headerRight: HeaderRight }} />
        <Stack.Screen name="memorial" component={Memorial} options={{ title: t('Memorial'), headerRight: HeaderRight }} />
        <Stack.Screen name="calendar" component={Calendar} options={{ title: t('Calendar'), headerRight: HeaderRight }} />
        <Stack.Screen name="health" component={Health} options={{ title: t('Health'), headerRight: HeaderRight }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;