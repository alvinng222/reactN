splashScreen.js
``` js
import {
  ImageBackground,
  Platform,
  StatusBar,
  AppState,
  Pressable,
} from 'react-native';
import { Toast } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
import ModalWrapper from 'react-native-modal-wrapper';
import { Icon } from '@ant-design/react-native';
import * as Animatable from 'react-native-animatable';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import { getTrackingStatus, requestTrackingPermission } from 'react-native-tracking-transparency';
import { withTranslation } from 'react-i18next';
import { withNavigationFocus } from 'react-navigation';
...
componentDidMount() {
...
componentDidUpdate(prevProps) {
...
componentWillUnmount() {
```
### AppState
https://reactnative.dev/docs/appstate

AppState can tell you if the app is in the foreground or background, and notify you when the state changes.

### Platform
https://reactnative.dev/docs/platform-specific-code

React Native provides a module that detects the platform in which the app is running.

### StatusBar
https://reactnative.dev/docs/statusbar

Component to control the app status bar.

### react-native-modal-wrapper
https://github.com/raynor85/react-native-modal-wrapper

Wrapper component that extends the react native Modal component, adding overlay clickable behavior and allowing swipe in and out in all directions

### react-native-device-info
https://github.com/react-native-device-info/react-native-device-info

Device Information for React Native.

### react-native-tracking-transparency
A React Native Library for interacting with the tracking API from iOS 14.
 
### react-native-animatable
https://github.com/oblador/react-native-animatable

Declarative transitions and animations for React Native

### @react-native-community/async-storage
https://github.com/react-native-async-storage/async-storage

An asynchronous, unencrypted, persistent, key-value storage system for React Native.

---
