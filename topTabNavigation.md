Top Tab Navigation
===

WAS ArticlesScreen.js 
``` js
import ArticlesList from './components/ArticlesList';

export default function ArticlesScreen() {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [category, setCategory] = useState('EHS');
  
  const navigateDetails = (s) => {
    if (s === 1) {
      setCategory('Articles');
    } else {
      setCategory('EHS');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Articles"
        accessoryRight={() => (
          <TopNavigationAction
            icon={(props) => <Icon {...props} name="search" fill={theme[Color.label]} />}
            onPress={() => Alert.alert('Search lo')}
          />
        )}
      />

      <View style={styles.container}>
        <TabBar
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index, navigateDetails(selectedIndex))}>
          <Tab title="EHS" />
          <Tab title="Articles" />
        </TabBar>
        <ArticlesList category={category} />
      </View>
    </SafeAreaView>
  );
}
```

## Material Top Tabs Navigator
* [Material Top Tabs Navigator](https://reactnavigation.org/docs/material-top-tab-navigator)

``` js
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
```

Example from Snack

``` js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```
installation
``` console
twng@Ts-MacBook-Pro armorasia % ls
App.js			babel.config.js		node_modules		src
__tests__		index.js		package-lock.json
android			ios			package.json
app.json		metro.config.js		react-native.config.js
twng@Ts-MacBook-Pro armorasia % npm install @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view

added 1 package, changed 4 packages, and audited 1259 packages in 7s

78 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
twng@Ts-MacBook-Pro armorasia % cd ios
twng@Ts-MacBook-Pro ios % pod install
Auto-linking React Native modules for target `armorasiaapp`: RNCAsyncStorage, RNGestureHandler, RNLocalize, RNReanimated, RNSVG, RNScreens, react-native-pager-view, and react-native-safe-area-context
Analyzing dependencies
Downloading dependencies
Generating Pods project
Integrating client project
Pod installation complete! There are 58 dependencies from the Podfile and 49 total pods installed.
twng@Ts-MacBook-Pro ios % cd ..
twng@Ts-MacBook-Pro armorasia % 
```
## tabBar Options
https://reactnavigation.org/docs/material-top-tab-navigator/#options
``` js
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}>
        <Tab.Screen name="EHS" component={EHSScreen} />
        <Tab.Screen name="Articles" component={ArticlesHomeScreen} />
      </Tab.Navigator>
```
https://github.com/react-navigation/react-navigation/issues/2082
``` js
      <Tab.Navigator
        // lazy={true} // 'lazy' in props is deprecated.
        screenOptions={({ route }) => ({
          tabBarIndicatorStyle: { backgroundColor: Color.primary },
          tabBarLabel: ({ tintColor, focused, item }) => {
            return focused ? (
              <Text style={{ fontWeight: 'bold', color: Color.primary }}>{route.name}</Text>
            ) : (
              <Text style={{ fontWeight: 'normal', fontSize: 15 }}>{route.name}</Text>
            );
          },
        })}>
        <Tab.Screen name="EHS" component={EHSScreen} />
        <Tab.Screen name="Articles" component={ArticlesHomeScreen} />
      </Tab.Navigator>
```
check on [/navigation/route prop](/navigation.md#route-prop-reference)

### Work after added in AppNavigation
EHSScreen.js
``` js
import React from 'react';
import { Text, View } from '@components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArticlesScreen from '../ArticlesScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

export default function EHSScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Articles" component={ArticlesScreen} />
    </Tab.Navigator>
  );
}
```

AppNavigation.js
``` js
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
import TestScreen from '../screens/TestScreen';
import ArticleDetailScreen from '../screens/ArticlesScreen/ArticleDetailScreen';
import EHSScreen from '../screens/ArticlesScreen/EHSScreen';
const Stack = createStackNavigator();

export default function AppNavigation(props) {
  const bottomTop = {
    ...TransitionPresets.ModalTransition,
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
      <Stack.Screen name="EventScreen" component={EventScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen} />
      <Stack.Screen name="EHSScreen" component={EHSScreen} />
    </Stack.Navigator>
  );
}
```
Test using HomeScreen.js
``` js
export default function Home({ navigation }) {
  const [value, setValue] = React.useState('');
  const [isModal, setIsModal] = useState(false);
  const themeContext = React.useContext(ThemeContext);
  const theme = useTheme();

  console.log('theme', theme);

  const toggleModal = () => {
    setIsModal((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme[Color.bgDefault] }}>
      <Header title={"What's New"} />
      <ScrollView style={{ flex: 1 }}>
        <Button style={{ margin: 10 }} onPress={() => themeContext.toggleTheme()}>
          Change Theme
        </Button>
        <Button style={{ margin: 10 }} onPress={() => navigation.navigate('EventScreen')}>
          Open Event Screen
        </Button>
        <Button style={{ margin: 10 }} onPress={() => navigation.navigate('EHSScreen')}>
          Open EHS Screen
        </Button>
        <Button style={{ margin: 10 }} onPress={toggleModal}>
          Open Menu
        </Button>
      </ScrollView>
      <Modal isVisible={isModal} onRequestClose={toggleModal} title="Modal">
        <View style={{ backgroundColor: '#ff0000' }}>
          <Text>agagag</Text>
          <Text>agagag</Text>
          <Text>agagag</Text>
          <Text>agagag</Text>
          <Text>agagag</Text>
          <Text>agagag</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
```
### final
ArticlesScreen.js
``` js
import React from 'react';
import {
  useStyleSheet,
  StyleService,
  TopNavigationAction,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import { Alert, SafeAreaView } from 'react-native';
import { Color } from '@constants';
import { Text, Header, View } from '@components';
import { useTranslation } from 'react-i18next';
import ArticlesList from './components/ArticlesList';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function ArticlesHomeScreen() {
  return <ArticlesList category={'Articles'} />;
}

function EHSScreen() {
  return <ArticlesList category={'EHS'} />;
}

export default function ArticlesScreen() {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Articles"
        accessoryRight={() => (
          <TopNavigationAction
            icon={(props) => <Icon {...props} name="search" fill={theme[Color.label]} />}
            onPress={() => Alert.alert('Search lo')}
          />
        )}
      />

      <Tab.Navigator>
        <Tab.Screen name="Articles" component={ArticlesHomeScreen} />
        <Tab.Screen name="EHS" component={EHSScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const themedStyles = StyleService.create({
  safeAreaView: {
    backgroundColor: Color.bgDefault,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  icon: {
    color: Color.label,
  },
});

```

--
