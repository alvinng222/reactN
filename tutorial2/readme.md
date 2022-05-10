Components, Styling & Layout
---
https://youtu.be/qSRrxpdMpVc?t=13293
#### React Native App Building Bread & Butter

| Components | + Styles & Layout | + * _Native API Modules_ |
| --- | --- | --- |
| Built-in (View, Text, Image, ...) | Component styles (borders, colors, shadows, custom fonts, ...) | * _Maps, Camera, ..._ |
| Custom Componenrs | Layout with Flexbox | |

* `*` not cover here!

* More about Built-in and Custom Components
* Images & Custom Fonts
* More Styles (e.g. drop-shadows) & more on Layouts


### How I start
* to create new project, can use `npx create-react-app my-app`
* at main directory before create project folder, type 'npx react-native init Rn-Style'

``` console
twng@Ts-MacBook-Pro ~ % cd Documents
twng@Ts-MacBook-Pro Documents % cd ReactNative
twng@Ts-MacBook-Pro ReactNative % ls
AwesomeProject		findjobs_universe	hookEffect.js
twng@Ts-MacBook-Pro ReactNative % npx react-native init RnStyle
```

* Run 'npx react-native run-ios' to auto-start ios simuator


``` console
✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing CocoaPods dependencies (this may take a few minutes)

  
  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/twng/Documents/ReactNative/RnStyle" && npx react-native run-android
  
  Run instructions for iOS:
    • cd "/Users/twng/Documents/ReactNative/RnStyle" && npx react-native run-ios
    - or -
    • Open RnStyle/ios/RnStyle.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button
    
  Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.
```

## template 1
App.js
``` js
import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
   <View>
  
   </View>
  );
}

const styles = StyleSheet.create({

});
```
---
App.js
``` js
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
```
components/Header.js
``` js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  }
});

export default Header;
```
## template 2
``` js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StartGameScreen = props => {};

const styles = StyleSheet.create({});

export default StartGameScreen;
```
---
StartGameScreen.js
``` js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default StartGameScreen;
```
App.js
``` js
...
import StartGameScreen from './screens/StartGameScreen';

...
      <StartGameScreen />
    </View>
  );
...
```
### Snippet
``` js
        <View>
            <Button title="Reset" onPress={() => {}} />
```
---
can also target `individual corners` with `borderBottomLeftRadius` etc.


StartGameScreen.js
``` js
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default StartGameScreen;
```
components/Card.js
``` js
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
```
StartGameScreen.js. revise01
``` js
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color="#c717fc" />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color="#f7287b" />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
```
https://youtu.be/qSRrxpdMpVc?t=15798

---
constants/colors.js
``` js
export default {
  primary: '#f7287b',
  accent: '#c717fc',
};
```
StartGameScreen.js
``` js
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
```
Header.js
``` js
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
```
---
components/Input.js
``` js
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
```
StartGameScreen.js revise-1
``` js
import Input from '../components/Input';

      ...
        <Text>Select a Number</Text>
        <Input />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
```
StartGameScreen.js revise-2
``` js
        <Input style={styles.input} />
        ...
const styles = StyleSheet.create({
  ...
  input: {
    width: 50,
    textAlign: 'center',
  },
});
```
---
You could say you're `"forwarding" your props` to the component you're using in your custom component.

Input.js
``` js
const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};
```
StartGameScreen.js
``` js
...
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
        />
        ...
```
``` js
          keyboardType="number-pad"
```
Setting this keyboardType will present a numeric soft keyboard to the user.

??? Numeric keyboard not up??

https://youtu.be/qSRrxpdMpVc?t=16687
