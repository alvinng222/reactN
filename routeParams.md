ArticleItem.js
``` js
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
...
  const navigation = useNavigation();
  ...
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ArticleDetailScreen', { item: tdata, stored: booked })}>  
```

ArticleDetailScreen.js
``` js
import React, { useEffect, useState } from 'react';
import { TopNavigationAction, Icon } from '@ui-kitten/components';
...
export default function ArticleDetailScreen({ route, navigation }) {
  const { item, stored } = route.params;

  const detailId = item.id;
  const [isSaved, setIsSaved] = useState(stored);
  ...
return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        onBack={() => navigation.goBack()}  
```
---
AppNavigation.js
``` js
import React from 'react';
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import NewsDetailScreen from '../screens/NewsDetailScreen';
import ArticleDetailScreen from '../screens/ArticlesScreen/ArticleDetailScreen';
...
const Stack = createStackNavigator();
...
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
export default function AppNavigation(props) {
...
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
      <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen} />
```
NewsCardItem.js
``` js
import { useNavigation } from '@react-navigation/native';

export default function NewsCardItem({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('NewsDetailScreen', { newsID: item.id })}
```
NewsDetailScreen.js
``` js
import React, { useEffect, useState } from 'react';

export default function NewsDetailScreen({ navigation, route }) {

  const newsID = route.params?.newsID;
```
