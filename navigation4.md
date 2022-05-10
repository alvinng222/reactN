## createAppContainer, createStackNavigator

https://reactnavigation.org/docs/4.x/hello-react-navigation

`createStackNavigator` is a function that returns a React component. 
It takes *a route configuration object* and, optionally, *an options object* (we omit this below, for now).
`createAppContainer` is a function that returns a React component to take as a parameter the React component 
created by the `createStackNavigator`, and can be directly exported from `App.js` to be used as our App's root component.


App.js
``` js
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
```
findjobs > AppNavigatior.js
``` js
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainStackNavigator from './MainTabNavigator.js';

const MyApp = createAppContainer(MainStackNavigator);
const prefix = 'findjobs://';
const MainApp = () => <MyApp uriPrefix={prefix} />;

export default MainApp;
```
findjobs > MainTabNavigator.js
``` js
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
...
import HomeScreen from '../screens/Home/HomeScreen';
import SplashScreen from '../screens/splashScreen';
...
const TabBarComponent = (props) => <BottomTabBar {...props} />;

const TabScreens = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarLabel: i18next.t('All Jobs'),
      }),
    },
    ...
const MainStackNavigator = createStackNavigator(
  {
    // ---- developing temp screen ---- //
    // MenuScreen,

    // ThankYouPage: ThankYouPage,
    // ---- Actual Screen ---- //
    SplashScreen: SplashScreen,
    Auth,
    PermissionScreen,
    TestScreen,
    Main: {
      screen: TabScreens,
      path: 'main',
    },
    ...
export default MainStackNavigator;    
```
## this.props.navigation
### Moving between screens
https://reactnavigation.org/docs/4.x/navigating/
``` js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

// ... other code from the previous section
```
* `this.props.navigation`: the navigation prop is passed in to every **screen component** in stack navigator.
* `navigate('Details')`: we call the `navigate` function with the name of the route that we'd like to move the user to.

### Navigation prop reference
https://reactnavigation.org/docs/4.x/navigation-prop/

Each `screen` component in your app is provided with the `navigation` prop automatically. 
The prop contains various convenience functions that dispatch navigation actions on the route's router. It looks like this:

- `this.props.navigation`
  - `navigate` - go to another screen, figures out the action it needs to take to do it
  - `goBack` - close active screen and move back in the stack
  - `addListener` - subscribe to updates to navigation lifecycle
  - `isFocused` - function that returns true if the screen is focused and false otherwise.
  - `state` - current state/routes
  - `setParams` - make changes to route's params
  - `getParam` - get a specific param with fallback
  - `dispatch` - send an action to router
  - `dangerouslyGetParent` - function that returns the parent navigator, if any

### Common API reference
#### navigate - Link to other screens#
Call this to link to another screen in your app. Takes the following arguments:

`navigation.navigate({ routeName, params, action, key })`

- `routeName` - A destination routeName that has been registered somewhere in the app's router
- `params` - Params to merge into the destination route
- `action` - (advanced) The sub-action to run in the child router, if the screen is a navigator. See Actions Doc for a full list of supported actions.
- `key` - Optional identifier of what route to navigate to. Navigate back to this route, if it already exists
``` js
class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>This is the home screen of the app</Text>
        <Button
          onPress={() => navigate('Profile', { name: 'Brent' })}
          title="Go to Brent's profile"
        />
      </View>
    );
  }
}
```
### Navigation lifecycle
#### Example scenario
Consider a stack navigator with screens `A` and `B`. After navigating to `A`, its `componentDidMount` is called. 
When pushing `B`,  its `componentDidMount` is also called, but `A` remains mounted on the stack and 
its `componentWillUnmount` is  therefore not called.

When going back from `B` to `A`, `componentWillUnmount` of `B` is called, but `componentDidMount` of `A`
is not because `A` remained mounted the whole time.

## this.props.navigation.getParam
### Passing parameters to routes
1. Pass params to a route by putting them in an object as a second parameter to 
the `navigation.navigate` function: `this.props.navigation.navigate('RouteName', { /* params go here */ })`
2. Read the params in your screen component: `this.props.navigation.getParam(paramName, defaultValue)`.
``` js
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
    );
  }
}
```
## navigationOptions
### Configuring the header bar
``` js
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /* render function, etc */
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };

  /* render function, etc */
}
```
### Using params in the title
https://reactnavigation.org/docs/4.x/headers

In order to use params in the title, we need to make `navigationOptions` a function that returns a configuration object.
``` js
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  /* render function, etc */
}
```
The argument that is passed in to the `navigationOptions` function is an object with the following properties:

- `navigation` - The navigation prop for the screen, with the screen's route at `navigation.state`.
- `screenProps` - The props passing from above the navigator component
- `navigationOptions` - The default or previous options that would be used if new values are not provided

We only needed the `navigation` prop in the above example but you may in some cases want to use `screenProps` or `navigationOptions`.

---
