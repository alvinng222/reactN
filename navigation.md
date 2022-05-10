navigation
===

* [useNavigation](#usenavigation)
* [useRoute](#useroute)
* [Route prop reference]([#route-prop-reference)

[AppNavigation, HomeSceen, TestScreen](#appnavigation-homesceen-testscreen)

[Hello React Navigation](#hello-react-navigation)
  * [Moving between screens](#moving-between-screens)
  * [Passing parameters to routes](#passing-parameters-to-routes)
  * [Configuring the header bar](#configuring-the-header-bar)
  * [Header buttons](#header-buttons)
  * [Nesting navigators](#nesting-navigators)
  * [Navigation lifecycle](#navigation-lifecycle)
* [Tab navigation](#tab-navigation)

testing
* [useNavigation test](#usenavigation-test)

ref:
* [Tab navigation](https://reactnavigation.org/docs/tab-based-navigation)
* [Screen options with nested navigators](https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state)
* [Stack Navigator](https://reactnavigation.org/docs/stack-navigator)
* [Material Top Tabs Navigator](https://reactnavigation.org/docs/material-top-tab-navigator)

---
#### pop after npm installation 
terminal
``` console
twng@Ts-MacBook-Pro armorasia % ls   
App.js                  android                 babel.config.js         ios                     node_modules            package.json            src
__tests__               app.json                index.js                metro.config.js         package-lock.json       react-native.config.js
twng@Ts-MacBook-Pro armorasia % cd ios
twng@Ts-MacBook-Pro ios % pod install
Auto-linking React Native modules for target `armorasiaapp`: RNCAsyncStorage, RNGestureHandler, RNLocalize, RNReanimated, RNSVG, RNScreens, react-native-pager-view, and react-native-safe-area-context
Analyzing dependencies
Downloading dependencies
Installing react-native-pager-view (5.4.0)
Generating Pods project
Integrating client project
Pod installation complete! There are 58 dependencies from the Podfile and 49 total pods installed.
twng@Ts-MacBook-Pro ios % git branch
* articles
  main
twng@Ts-MacBook-Pro ios % 
```


---
### [useNavigation]( https://reactnavigation.org/docs/6.x/use-navigation )

`useNavigation` is a hook which gives access to `navigation` object. It's useful when you cannot pass the `navigation` prop into the component directly, or don't want to pass it in case of a deeply nested child.

`useNavigation()` returns the navigation prop of the screen it's inside.

Example
``` js
import * as React from 'react';
import { Button } from 'react-native';
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
```

Example from Snack, App.js
``` js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
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

// initial screen, shown "This is the home screen of the app" "Go to Profile"
function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the home screen of the app</Text>
      <Button title="Go to Profile" onPress={() => navigate('Profile')} />
    </View>
  );
}

// after clicked the home screen, shown "Profile Screen" "Back"
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <MyBackButton />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```


### [useRoute](https://reactnavigation.org/docs/use-route/)
`useRoute` is a hook which gives access to `route` object. It's useful when you cannot pass the `route` prop into the component directly, or don't want to pass it in case of a deeply nested child.

`useRoute()` returns the route prop of the screen it's inside.

Example
``` js
import * as React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function MyText() {
  const route = useRoute();

  return <Text>{route.params.caption}</Text>;
}
```

See the documentation for the [`route` prop](#route-prop-reference) for more info.

example on Snack
``` js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';

function MyText() {
  const route = useRoute();

  return <Text>{route.params.caption}</Text>;
}

// initial screen, shown "This is the home screen of the app" "Go to Profile"
function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the home screen of the app</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigate('Profile', { caption: 'Some caption' })}
      />
    </View>
  );
}

// after clicked the home screen, shown "Profile Screen" "Some caption"
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <MyText />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
https://reactnavigation.org/docs/6.x/use-route



[useNavigationState](https://reactnavigation.org/docs/6.x/use-navigation-state)

[useFocusEffect](https://reactnavigation.org/docs/6.x/use-focus-effect)

[useIsFocused](https://reactnavigation.org/docs/6.x/use-is-focused)

[useLinkTo](https://reactnavigation.org/docs/6.x/use-link-to)

[useLinkProps](https://reactnavigation.org/docs/6.x/use-link-props)

[useLinkBuilder](https://reactnavigation.org/docs/6.x/use-link-builder)

[useScrollToTop](https://reactnavigation.org/docs/6.x/use-scroll-to-top)

[useTheme](https://reactnavigation.org/docs/6.x/use-theme)


### [Route prop reference](https://reactnavigation.org/docs/route-prop/)
**Each `screen` component in your app is provided with the `route` prop automatically.** The prop contains various information regarding current route (place in navigation hierarchy component lives).

- `route`
  * `key` - Unique key of the screen. Created automatically or added while navigating to this screen.
  * `name` - Name of the screen. Defined in navigator component hierarchy.
  * `path` - An optional string containing the path that opened the screen, exists when the screen was opened via a deep link.
  * `params` - An optional object containing params which is defined while navigating e.g.` navigate('Twitter', { user: 'Dan Abramov' })`.
``` js
function ProfileScreen({ route }) {
  return (
    <View>
      <Text>This is the profile screen of the app</Text>
      <Text>{route.name}</Text>
    </View>
  );
}
```


---
## AppNavigation, HomeSceen, TestScreen

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
    </Stack.Navigator>
  );
}
```
HomeScreen.js
``` js
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import { ThemeContext } from '../../constants/theme/theme-context';
import Header from '../../components/Header/Header';
import { Modal, Text, Button, View } from '@components';
import { Color } from '@constants';

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
        <Button style={{ margin: 10 }} onPress={() => navigation.navigate('TestScreen')}>
          Open Event Test Screen
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

const styles = StyleSheet.create({
  text: {
    margin: 2,
  },
});
```
---
TestScreen.js
``` js
import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />;

const SecondRoute = () => <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
```

---
---
Navigating to a new screen

https://reactnavigation.org/docs/6.x/navigating

``` js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DDetails')}
      />
    </View>
  );
}

// ... other code from the previous section

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen ...</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HHome" component={HomeScreen} />
        <Stack.Screen name="DDetails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
---

# Hello React Navigation

https://reactnavigation.org/docs/hello-react-navigation

**createStackNavigator** is a function that returns an object containing 2 properties: Screen and Navigator. Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements as its children to define the configuration for routes.

**NavigationContainer** is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.

``` js
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
#### Summary
* React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens.
* `Stack.Navigator` is a component that takes route configuration as its children with additional props for configuration and renders our content.
* Each `Stack.Screen` component takes a name prop which refers to the name of the route and component prop which specifies the component to render for the route. These are the 2 required props.
* To specify what the initial route in a stack is, provide an `initialRouteName`as the prop for the navigator.
* To specify screen-specific options, we can pass an `options` prop to `Stack.Screen`, and for common options, we can pass `screenOptions` to `Stack.Navigator`

### Moving between screens
#### Navigating to a new screen
https://reactnavigation.org/docs/navigating
``` js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// ... other code from the previous section
```
* `navigation` - the `navigation` prop is passed in to every **screen component** (definition) in stack navigator .
* `navigate('Details')` - we call the `navigate` function (on the navigation prop — naming is hard!) with the name of the route that we'd like to move the user to.
* If we call `navigation.navigate` with a route name that we haven't defined in a navigator, it'll print an error in development builds and nothing will happen in production builds

``` js
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
```

#### Summary#
* `navigation.navigate('RouteName')` pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen.
* We can call `navigation.push('RouteName')` as many times as we like and it will continue pushing routes.
* The header bar will automatically show a back button, but you can programmatically go back by calling `navigation.goBack()`. On Android, the hardware back button just works as expected.
* You can go back to an existing screen in the stack with `navigation.navigate('RouteName')`, and you can go back to the first screen in the stack with `navigation.popToTop()`.
* The `navigation` prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

### Passing parameters to routes
https://reactnavigation.org/docs/params

There are two pieces to this:
1. Pass params to a route by putting them in an object as a second parameter to the `navigation.navigate` function: `navigation.navigate('RouteName', { /* params go here */ })`
2. Read the params in your screen component: `route.params`.

``` js
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
```
#### Updating params
The `navigation.setParams` method lets you update the params of a screen.

Basic usage:
``` js
navigation.setParams({
  query: 'someText',
})
```
#### Initial params
If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass. Initial params can be specified with an `initialParams` prop:
``` js
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  initialParams={{ itemId: 42 }}
/>
```

#### Passing params to a previous screen#
``` js
function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
```

#### What should be in params
Some examples of what should be in params are:

1. IDs like user id, item id etc., e.g. `navigation.navigate('Profile', { userId: 'Jane' })`
2. Params for sorting, filtering data etc. when you have a list of items, e.g. `navigation.navigate('Feeds', { sortBy: 'latest' })`
3. Timestamps, page numbers or cursors for pagination, e.g. `navigation.navigate('Chat', { beforeTime: 1603897152675 })`
4. Data to fill inputs on a screen to compose something, e.g. `navigation.navigate('ComposeTweet', { title: 'Hello world!' })`

In essence, pass the least amount of data required to identify a screen in params, for a lot of cases, this simply means passing the ID of an object instead of passing a full object. Keep your application data separate from the navigation state.

#### Summary#
* `navigate` and `push` accept an optional second argument to let you pass parameters to the route you are navigating to. For example: `navigation.navigate('RouteName', { paramName: 'value' })`.
* You can read the params through `route.params` inside a screen
* You can update the screen's params with `navigation.setParams`
* Initial params can be passed via the `initialParams` prop on `Screen`
* Params should contain the minimal data required to show a screen, nothing more

### Configuring the header bar
https://reactnavigation.org/docs/headers

#### Using params in the title#
``` js
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Custom profile header' })
        }
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'My home' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
The argument that is passed in to the options function is an object with the following properties:

* `navigation` - The [navigation prop](https://reactnavigation.org/docs/navigation-prop) for the screen.
* `route` - The [route prop](https://reactnavigation.org/docs/route-prop) for the screen

We only needed the `route` prop in the above example but you may in some cases want to use `navigation` as well.

#### Updating `options` with `setOptions`#
It's often necessary to update the `options` configuration for the active screen from the mounted screen component itself. We can do this using `navigation.setOptions`
``` js
/* Inside of render() of React class */
<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>
```
#### Adjusting header styles#
There are three key properties to use when customizing the style of your header: 
* `headerStyle`: a style object that will be applied to the `View` that wraps the header. If you set `backgroundColor` on it, that will be the color of your header.
* `headerTintColor`: the back button and title both use this property as their color. In the example below, we set the tint color to white (`#fff`) so the back button and the header title would be white.
* `headerTitleStyle`: if we want to customize the `fontFamily`, `fontWeight` and other `Text` style properties for the title, we can use this to do it.
``` js
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}
```

#### Sharing common options across screens
We can instead move the configuration up to the stack navigator under the prop `screenOptions`.
``` js
function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  );
}
```
#### Replacing the title with a custom component
``` js
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
    </Stack.Navigator>
  );
}
```
#### Summary#
* You can customize the header inside of the `options` prop of your screen components. Read the full list of options [in the API reference](https://reactnavigation.org/docs/stack-navigator#navigationoptions-used-by-stacknavigator).
* The `options` prop can be an object or a function. When it is a function, it is provided with an object with the `navigation` and `route` prop.
* You can also specify shared `screenOptions` in the stack navigator configuration when you initialize it. The prop takes precedence over that configuration.

### Header buttons
#### Adding a button to the header
``` js
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
```
#### Header interaction with its screen component
``` js
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerTitle: props => <LogoTitle {...props} />,
        })}
      />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return <Text>Count: {count}</Text>;
}
```
#### Customizing the back button
...

#### Summary#
* You can set buttons in the header through the `headerLeft` and `headerRight` properties in `options`.
* The back button is fully customizable with `headerLeft`, but if you just want to change the title or image, there are other `options` for that — `headerBackTitle`, `headerTruncatedBackTitle`, and `headerBackImage`.
* You can use a callback for the options prop to access `navigation` and `route` objects.

### Nesting navigators
Nesting navigators means rendering a navigator inside a screen of another navigator, for example:
``` js
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

#### ref: [Screen options with nested navigators](https://reactnavigation.org/docs/6.x/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state)

``` js
const Tab = createTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="A"
        component={A}
        options={{ tabBarLabel: 'Home!' }}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="B"
        component={B}
        options={{ tabBarLabel: 'Settings!' }}
      />
    </SettingsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

...

### Navigation lifecycle
https://reactnavigation.org/docs/6.x/navigation-lifecycle

``` js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

...

---

### Tab navigation
https://reactnavigation.org/docs/6.x/tab-based-navigation

#### Minimal example of tab-based navigation
``` js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

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
---
## testing

### useNavigation test

TestArticleItem.js
``` js
import React from 'react';
import { useStyleSheet, StyleService } from '@ui-kitten/components';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Header, View } from '@components';
import { useNavigation } from '@react-navigation/native';

export default function TestArticleItem({ TData }) {
  const styles = useStyleSheet(themedStyles);
  const navigation = useNavigation();

  // console.log('TestArticleItem : ' + TData.Title);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="TestArticleItem" />
      <TouchableOpacity
        onPress={
          // () => console.log('T E S T I N G ...')
          () => navigation.navigate('ArticleDetailScreen', { item: TData })
        }>
        <View style={styles.container}>
          <Text>{'TestArticleItem : ' + TData.Title}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const themedStyles = StyleService.create({
  safeAreaView: {
    flex: 1,
  },
});
```

ArticleDetailScreen.js
``` js
import { useRoute } from '@react-navigation/native';

export default function ArticleDetailScreen({ navigation }) {
  const styles = useStyleSheet(themedStyles);
  const { t } = useTranslation();

  // const route = useRoute();
  const desc = useRoute().params.item;
  console.log('ArticleDetailScreen : ' + desc);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ArticleDetails" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text>{desc.Title}</Text>
        <Text>{t('ArticleDetails')}</Text>
      </View>
    </SafeAreaView>
  );
}
```
---
HomeScreen.js
``` js
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {
        <>
          <TabBar tabs={TAB} route={route} />
          {route === 'Event' && <EventList event={event} />}
          {route === 'News' && <NewsList news={news} />}
        </>
      }
    </SafeAreaView>
  );
```


---
