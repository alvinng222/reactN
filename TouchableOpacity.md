TouchableOpacity
---

https://reactnative.dev/docs/touchableopacity


mytest
``` js
import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is the home screen of the app</Text>
          <View>
            <Text>Go to Profile</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <MyBackButton />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function ArticleDetails({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

```

