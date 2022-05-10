State Hook, Effect Hook
---

https://reactjs.org/docs/hooks-overview.html

### State Hook

``` js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Equivalent Class Example

``` js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```



### Effect Hook

``` js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Example Using Classes

``` js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
---
### sample from armorasia
**useEffect** on [SplashScreen.js](https://gitlab.com/findjobssg/armorasia/-/blob/main/src/screens/SplashScreen/SplashScreen.js)
``` js
import React, { useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import { Color } from '@constants';
import Text from '@components/Text';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      // navigation.replace('NewUserVideoScreen');
      navigation.replace('Main');
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image
          source={require('@images/logo.png')}
          resizeMode="contain"
          style={{ width: 275, flex: 1 }}
        />
        <Text type="label">Powered by Findjobs Pte Ltd</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Color.bgDefault,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

---
like that also can?!

SavedArticlesScreen.js
``` js
  useEffect(() => {
    getArticlesList();
    getArticles();
  }, [articlesData < 1]);
```
---
SavedArticlesScreen.js
``` js
import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

export default function SavedArticlesScreen() {
  ...
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  const [storeArticlesList, setStoreArticlesList] = useState([]);
  const [newList, setNewList] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    getStoreArticlesList();
    getArticles();
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (storeArticlesList !== null && articlesData !== null) {
      getNewList();
    }
  }, [articlesData, storeArticlesList]);
  useEffect(() => {
    if (isFocused === true) {
      getStoreArticlesList();
    }
  }, [isFocused]);

  const getArticles = async () => {
  ...
    // console.log('>>> async getArticles data', data.data.article.length);
  };
  
  const getStoreArticlesList = async () => {
    const value = await store.get('articles');
    setStoreArticlesList(value);
    // console.log('>>> async getStoreArticlesList', value.length);
  };
  const getNewList = () => {
    let newArr = [];
    if (storeArticlesList !== null) {
      storeArticlesList.forEach((val) => {
        if (articlesData.length > 0) {
          let k = articlesData.filter((itm) => itm.id === val);
          newArr = [...newArr, k[0]];
        }
      });
      setNewList(newArr);
    }
  };  
```

