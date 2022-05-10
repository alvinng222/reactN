
High Usage commands
===

Terminals, updating, and run ios

    %       npm install
    %       cd ios
    %       pod install
    %       cd ..
    %       npx react-native run-ios


    
---
quick refresh
===
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
ref: [React Native Tutorial for Begineers](/tutorial)

---
### hasuru postgres query

    query MyQuery {
      article(where: {title: {_like: "%URAB%"}}) {
        id
        title
      }
    }
    
myref: [hasura.md](hasura.md)    


---
# reactNative
https://github.com/alvinng222/reactNative.git

