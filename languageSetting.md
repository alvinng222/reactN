
AppNavigation.js
``` js
import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Screens
import MainTab from './MainTab';
import LanguageSetting from '../screens/AboutMeScreen/LanguageSetting';
...;
import MainTabs from './BottomNavigation';

const Stack = createStackNavigator();

export default function AppNavigation(props) {
  const { role, isAuthenticated } = useAuth();

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
...
      <Stack.Screen name="LanguageSetting" component={LanguageSetting} />
    </Stack.Navigator>
  );
}
```
AboutScreen.js
``` js
import ListItem from './components/ListItem';
import CommonList from './components/CommonList';
            ...
              <ListItem
                title="Saved articles"
                image={require('@images/icons/mySaved.png')}
                onPress={() => {}}
              />
              <CommonList navigation={navigation} />
              ..
```
CommonList.js
``` js
export default function CommonList({ navigation }) {
  const { t } = useTranslation();

  return (
    <>
      <Divider style={styles.divider} />
      ...
      <ListItem
        title="Language settings"
        image={require('@images/icons/myLanguage.png')}
        onPress={() => navigation.navigate('LanguageSetting')}
      />
````

LanguageSetting.js
``` js
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Color } from '@constants';
import { Text, Header, Button } from '@components';
import { useTranslation } from 'react-i18next';
import i18n from '../../localization';

export default function LanguageSetting({ navigation }) {
  const { t } = useTranslation();

  const [langState, setlangState] = useState('English');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header onBack={() => navigation.goBack()} title="Language settings" />
      <View style={styles.container}>
        <View style={styles.currView}>
          <Text type="title">{t('Current language setting is ')}</Text>
          <Text style={styles.currText}>{t(langState)}</Text>
        </View>
        <View style={styles.buttonView}>
          <Button
            title={t('English')}
            onPress={() => {
              setlangState('English');
              i18n.init({ lng: 'EN' });
            }}
          />

          <Button
            style={styles.button}
            title={t('Chinese')}
            onPress={() => {
              setlangState('Chinese');
              i18n.init({ lng: 'CN' });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Color.bgDefault,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  currView: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '20%',
  },
  currText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.text,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

```
