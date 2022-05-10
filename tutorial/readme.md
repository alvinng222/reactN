React Native Tutorial for Begineers
---
https://www.youtube.com/watch?v=qSRrxpdMpVc


App.js
``` js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open to start!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text changed!')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

https://reactnative.dev/

https://reactnative.dev/docs/components-and-apis

View, TextInput, Button
``` js
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
```

### <View style={{}}>
check on the Core Documents > View/ Style > layoutDrop
``` js
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput 
          placeholder="Course Goal" 
          style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} 
        />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
```
  
### Flexbox in React Native
  flexDirection
``` js
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button  } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput 
          placeholder="Course Goal" 
          style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 }} 
        />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
```
  
backgroundColor
``` js
import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

```
using Flex
``` js
import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}
```  
  
### StyleSheet.create
``` js
import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});  
```
### added useState console.log
``` js
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // }
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

``` 
https://youtu.be/qSRrxpdMpVc?t=7084  

  
### spread map  
``` js
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  // const [] = useState([]);                           // f spread
  const [courseGoals, setCourseGoals] = useState([]);   // f spread

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]);               // f spread
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]); // f spread
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {/* {courseGoals} */                                    /* f spread */}
        {/* {courseGoals.map(() => )} */}
        {/* {courseGoals.map((goal) => {return ...})} */}
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

```
  
# snippet
``` js
export default function App() {
  const [newG, setN] = useState('');
  const [Goals, setG] = useState([]);

  const nHdlr = (t) => { setN(t) };

  const addHdlr = () => { setG(curr => [...curr, newG]) };

  return (
    <View style={styles.screen}>
      <View>
        <TextInput  onChangeText={nHdlr}  value={newG} />
        <Button title="ADD" onPress={addHdlr} />
      </View>
      <View>
        {Goals.map((g) => <Text>{g}</Text>)}
      </View>
    </View>
  );
}
```  
https://youtu.be/qSRrxpdMpVc?t=7467

  
Warning: Each child in a list should have a unique "key" prop.

``` js
...
      <View>
        {courseGoals.map(goal => (
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
...
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

```  
Warning: Encountered two children with the same key, ...
``` js
...
      <View>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
...
```
https://youtu.be/qSRrxpdMpVc?t=7802

### ScrollView
* have different between Andriod and ios
``` js
...
  return (
    <ScrollView>
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
    </ScrollView>
  );
...  
```
### FlatList, Key

flexbox stylings to have content adjust itwelf

dulesOnly=false&runModule=true&app=org.reactjs.native.example.AwesomeProject:74529:36
 WARN  VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.
 '

React Native supports "id" instead of "key".

####  keyExtractor={(item, index) => item.id}
``` js
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
```
https://youtu.be/qSRrxpdMpVc?t=8424


# components/GoalItem.js
``` js
import React from 'react'

const GoalItem = props => {
    return ...
};

export default GoalItem
```

### GoalItem.js
``` js
/*
on App.js, added:
    import GoalItem from './components/GoalItem'; 
edit:
    renderItem={itemData => <GoalItem title={itemData.item.value}/>}
*/

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
```
### GoalInput.js
``` js
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        onPress={props.onAddGoal.bind(this, enteredGoal)} // f GoalInput
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
```
### App.js
``` js
import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import GoalItem from './components/GoalItem'; //                    f GoalItem
import GoalInput from './components/GoalInput'; //                  f GoalInput

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} //                      f GoalInput
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />} // f GoalItem
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
```
FROM App.js
```
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
```
TO App.js
```
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} //                      f GoalInput
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />} // f GoalItem
      />
    </View>
  );
```
https://youtu.be/qSRrxpdMpVc?t=9111

### TouchableOpacity TouchableHighlight TouchableWithoutFeedback

App.js
``` js
...
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => console.log('Does that work?')}
            title={itemData.item.value}
          />
        )}
      />
```
GoalItem.js
``` js
const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
```
Can set the underlayColor prop to a color

### onDelete filter
App.js
``` js
import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
```
GoalItem.js
``` js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
```
https://youtu.be/qSRrxpdMpVc?t=9930


### Modal
https://reactnative.dev/docs/modal

animationType

app.js
``` js
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };
  
  ...
  //return (
  //  <View style={styles.screen}>
  //   <GoalInput onAddGoal={addGoalHandler} />
  //   <FlatList  
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      {/* visible tested as viewsible , onAddGoal tested as onAddTask */}
      <FlatList
      ...
```
GoalInput.js
``` js
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      {/* visible tested as viewsible  */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        {/* onAddGoal tested as onAddTask */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
```

https://youtu.be/qSRrxpdMpVc?t=10663

#### Button Cancel
App.js
``` js
  ...
  
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      ...
```
GoalInput.js
``` js
  ...
  
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel} />
        <Button title="ADD" onPress={addGoalHandler} />
    ...
```
GoalInput.js updated View
``` js
        ...
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ...
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;

```
https://youtu.be/qSRrxpdMpVc?t=11248

---
# Debugging
https://youtu.be/qSRrxpdMpVc?t=11415

What to Debug?

| Error Message /  App Crashes | Logical Errors | Styling, Layout & UX |
| --- | --- | --- |
| Syntax errors | Undesired or unexpected app behaviour | Unexpected/"wrong" styling or layout |
| Bugs in your code (e.g. using undefined values, wrong types...) | Unexpected/ Unhandled user behaviour | Inconsistent results on different devices  |
| "Unavoidable errors" (e.g. failing network requests) | Sequence of steps leads to errors | Layout doesn't "work" on certain devices or orientations |

* Read the error messages (seriously)!
  * Often, you the error message contains the solution or a (preatty) exact pointer at the problematic code line.
* console.log()
  * Get a feeling for the "flow" of your code (What happens when? Which value is used where?)
*  Chrome Debugger (+ Breakpoints)

#### screen warning

#### shake phone
* ios: `ctrl command Z` to launch the ios Debug Menu
* android: `command M` to launch Android Debug Menu
* debug in Chrome

#### Reloading
shortcuts for reloading
* Android: RR (i.e. pressR twice),
* IOS: CMD + R/ CTRL + R (not working!)

#### Debugger
https://reactnative.dev/docs/debugging

## React Native Debugger
https://youtu.be/qSRrxpdMpVc?t=12845

https://github.com/jhen0409/react-native-debugger

* Shake the device to open menu, and select debug to run the `React Native Debugger` app.
* `Reload JS` - right-click to select from menu 

https://youtu.be/qSRrxpdMpVc?t=13289

---
re-start this project
===

* start VS code.
* Terminal, at project directory: `npx react-native run-ios` will call out the XCode simulator
* ??? Terminal, at project directory: `npx react-native run-android`, will call 

Terminal 1
``` console
npm start
```
Terminal 2 for ios
``` console
 ~ % cd Documents/ReactNative/AwesomeProject
 AwesomeProject % npx react-native run-ios
```
* ??? Run Android Studio

Terminal 3 for Android
``` console
npx react-native run-android
```
* ??? Configure > AVD Manager > Launch

--- 
