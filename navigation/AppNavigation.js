import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Screens
import MainTabs from './BottomNavigation';
import SplashScreen from '../screens/SplashScreen';
import EventScreen from '../screens/EventScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import TestScreen from '../screens/TestScreen';
import ArticleDetailScreen from '../screens/ArticlesScreen/ArticleDetailScreen';
import { WatchVideoScreen, NewUserVideoScreen } from '../screens/Video';
import { ReportWritingScreen, ReportDetailScreen } from '../screens/ReportScreen';

const Stack = createStackNavigator();

export default function AppNavigation(props) {
  const bottomTop = {
    ...TransitionPresets.ModalSlideFromBottomIOS,
    gestureEnabled: false,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="NewUserVideoScreen" component={NewUserVideoScreen} />
      <Stack.Screen name="WatchVideoScreen" component={WatchVideoScreen} />
      <Stack.Screen name="EventScreen" component={EventScreen} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen} />
      <Stack.Screen name="ReportWritingScreen" component={ReportWritingScreen} />
      <Stack.Screen name="ReportDetailScreen" component={ReportDetailScreen} options={bottomTop} />
    </Stack.Navigator>
  );
}
