
src/functions/index.js
``` js
import store from './store';
import checkVideoComplete from './checkVideoComplete';
export { store, checkVideoComplete };
```
src/functions/store/index.js
``` js
/**
 * @overview A minimalistic wrapper around React Native's AsyncStorage.
 * @license MIT
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { merge } from 'lodash';

const store = {
  /**
   * Get a one or more value for a key or array of keys from AsyncStorage
   * @param {String|Array} key A key or array of keys
   * @return {Promise}
   */
  async get(key) {
    if (!Array.isArray(key)) {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } else {
      const values = await AsyncStorage.multiGet(key);
      return values.map((value_1) => {
        return JSON.parse(value_1[1]);
      });
    }
  },

  /**
   * Save a key value pair or a series of key value pairs to AsyncStorage.
   * @param  {String|Array} key The key or an array of key/value pairs
   * @param  {Any} value The value to save
   * @return {Promise}
   */
  async save(key, value) {
    if (!Array.isArray(key)) {
      return AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      var pairs = key.map(function (pair) {
        return [pair[0], JSON.stringify(pair[1])];
      });
      return AsyncStorage.multiSet(pairs);
    }
  },

  /**
   * Updates the value in the store for a given key in AsyncStorage. If the value is a string it will be replaced. If the value is an object it will be deep merged.
   * @param  {String} key The key
   * @param  {Value} value The value to update with
   * @return {Promise}
   */
  async update(key, value) {
    const item = await store.get(key);
    value = typeof value === 'string' ? value : merge({}, item, value);
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * Delete the value for a given key in AsyncStorage.
   * @param  {String|Array} key The key or an array of keys to be deleted
   * @return {Promise}
   */
  async delete(key) {
    if (Array.isArray(key)) {
      return AsyncStorage.multiRemove(key);
    } else {
      return AsyncStorage.removeItem(key);
    }
  },

  /**
   * Get all keys in AsyncStorage.
   * @return {Promise} A promise which when it resolves gets passed the saved keys in AsyncStorage.
   */
  keys() {
    return AsyncStorage.getAllKeys();
  },
};

export default store;

//  UseCase --- Import { store }from '@constants'

//  store.save(key,value)
//  .then(()=>{store.get(key)})
//  .then(()=>Sstore.delete(key)})
//  .catch(error()=>{console.log(error)})
```

TestScreen.js
```js
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Color } from '@constants';
import { Text, Header } from '@components';
import { useTranslation } from 'react-i18next';
import { store } from '../functions';
import { Button } from '@components';

export default function TestScreen() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="TestScreen" />
      <View style={styles.container}>
        <Text>{t('Async store')}</Text>
        <Button
          style={styles.button}
          onPress={() => {
            store.save('test1', { id: 1, test: 1 });
          }}>
          save key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            await store.delete('test1', 'haha');
          }}>
          delete key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            await store.update('test1', { name: 'profile', id: 5 });
          }}>
          update key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            const value = await store.get('test1');
            console.log(value);
          }}>
          get key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            const value = await store.keys();
            console.log(value);
          }}>
          get all key
        </Button>
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
  },
  button: {
    margin: 8,
  },
});

```
- press `save key`
- press 'delete key`
- press `update key`
- press `get key`
  - ` LOG  {"id": 5, "name": "profile"}`  
- press `get all key`
  - ` LOG  ["token", "role", "test1"]`
- press 'delete key`
- press `get key`
  - ` LOG  null`
- press `get all key`
- ` LOG  ["token", "role"]`
- press `save key`
- press `get key`
- ` LOG  {"id": 1, "test": 1}`
- press `update key`
- press `get key`
  - ` LOG  {"id": 5, "name": "profile", "test": 1}
- press `get key`
  - ` LOG  {"id": 1, "test": 1}`

---
localization/index,js
``` js
import { store } from '../functions';
...
// init with previous store value
const getLang = async () => {
  const lang = await store.get('language');
  if (!lang) {
    store.save('language', 'EN');
    i18n.init({ lng: 'EN' });
  } else {
    i18n.init({ lng: lang });
  }
};
getLang();
```
LanguageSetting.js
``` js
import React, { useState } from 'react';
import { Text, Header, Button } from '@components';
import { useTranslation } from 'react-i18next';
import i18n from '../../localization';
import { store } from '../../functions';

export default function LanguageSetting({ navigation }) {
  const { t } = useTranslation();
  const [langState, setlangState] = useState(null);
  const getLang = async () => {
    const lang = await store.get('language');
    setlangState(lang === 'EN' ? 'English' : 'Chinese');
  };
  getLang();

  return (
```
---
GRUD
TestScreen.js
``` js
export default function TestScreen() {
  const mydata = {
    1: { id: 1, test: 1 },
    5: { id: 5, test: 5 },
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="TestScreen" />
      <View style={styles.container}>
        <Text>{t('Async store')}</Text>
        <Button
          style={styles.button}
          onPress={() => {
            store.save('test1', mydata);
          }}>
          save key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            await store.update('test1', {
              5: { id: 5, test: 6 },
            });
          }}>
          update key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            await store.update('test1', {
              3: { id: 3, test: 3 },
            });
          }}>
          add new key
        </Button> 
```
``` console
 LOG  null
 LOG  {"1": {"id": 1, "test": 1}, "5": {"id": 5, "test": 5}}
 LOG  {"1": {"id": 1, "test": 1}, "5": {"id": 5, "test": 6}}
 LOG  {"1": {"id": 1, "test": 1}, "3": {"id": 3, "test": 3}, "5": {"id": 5, "test": 6}}
```
To use `TestScreen.js` need to change `components/CommonList.js`
``` js
      <ListItem
        title="Language settings"
        image={require('@images/icons/myLanguage.png')}
        onPress={() => navigation.navigate('TestScreen')}
      />
```
---
To update
``` js
export default function TestScreen() {
  const { t } = useTranslation();
  const mydata = {
    saved: [
      { id: 11, a: { id: 1, test: 1 } },
      { id: 55, a: { id: 5, test: 5 } },
    ],
  };

  return (
  ...
        <Button
          style={styles.button}
          onPress={async () => {
            mydata.saved[1] = { id: 55, a: { id: 5, test: 2 } };
            await store.update('test1', mydata);
          }}>
          update key
        </Button>  
        <Button
          style={styles.button}
          onPress={async () => {
            const value = await store.get('test1');
            console.log(value.saved[0]);
            console.log(value.saved[1]);
            console.log(value.saved.length);
          }}>
          get key
        </Button>
```
``` console
 LOG  {"a": {"id": 1, "test": 1}, "id": 11}
 LOG  {"a": {"id": 5, "test": 5}, "id": 55}
 LOG  {"a": {"id": 1, "test": 1}, "id": 11}
 LOG  {"a": {"id": 5, "test": 2}, "id": 55}
```

---
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
``` js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```
TestScreen.js
``` js
        <Button
          style={styles.button}
          onPress={async () => {
            mydata.saved[3] = { id: 5, test: 2 };
            await store.update('test1', mydata);
          }}>
          update key
        </Button>
        <Button
          style={styles.button}
          onPress={async () => {
            const value = await store.get('test1');
            console.log('mydata:', mydata);
            mydata.saved.forEach((element) => console.log(element.id === 55 ? element : '')
          }}>
          get key
        </Button>
```
``` console
 LOG  mydata: {"saved": [{"id": 11, "test": 1}, {"id": 55, "test": 5}]}
 LOG  
 LOG  {"id": 55, "test": 5}
```
---

ArticlesScreen.js
``` js
import React, { useEffect, useState } from 'react';
import { store } from '../../functions';
import ArticlesList from './components/ArticlesList';

export default function ArticlesScreen() {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [articlesData, setArticlesData] = useState([]);
  ...
    useEffect(() => {
      getArticles();
  }, []);
  
  const getArticles = async () => {
    setIsLoading(true);
    const query = `
  ...
    const data = await response.json();
    setArticlesData(data.data.article);

    let value = await store.get('articles');
    if (value) {
      setStores(value);
    }
    setIsLoading(false);
  };
```
ArticlesList.js
``` js
```
ArticleItem.js
``` js
import React, { useState, useEffect } from 'react';
import { store } from '../../../functions';

export default function ArticleItem({ tdata, stored }) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [booked, setBooked] = useState(false);
  const [articleImage, setArticleImage] = useState({ image: { uri: tdata?.feature_image } });

  useEffect(() => {
    getSavedArticle();
  }, []);

  const getSavedArticle = async () => {
    let value = stored;
    let [preBook] = value.filter((item) => item === tdata.id);
    if (preBook) {
      setBooked(true);
    }
  };

  const articleSaved = async (tdataId = tdata.id) => {
    let array = await store.get('articles');
    let newarray = [];
    booked
      ? (newarray = array.filter((item) => item !== tdataId))
      : array
      ? (newarray = [...array, tdataId])
      : (newarray = [tdataId]);
    store.save('articles', newarray);
    // console.log('newarray ', newarray);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ArticleDetailScreen', { item: tdata, stored: booked })}>
        ...

          <TouchableOpacity
            style={styles.bookmk}
            onPress={() => {
              setBooked((previousState) => !previousState);
              articleSaved();
            }}>
            <Text style={booked ? styles.bookmkTxtMarked : styles.bookmkTxtUnmark}>
              {booked ? t('Saved') : t('Save')}
            </Text>
            <Icon
              name={booked ? 'bookmark' : 'bookmark-outline'}
              fill={booked ? 'black' : Color.label}
              width={21}
              height={21}
            />
          </TouchableOpacity> 
```
ArticleDetailScreen.js
``` js
import React, { useEffect, useState } from 'react';
import { store } from '../../functions';

export default function ArticleDetailScreen({ route, navigation }) {
  const { item, stored } = route.params;
  const { getToken } = useAuth();
  const [isSaved, setIsSaved] = useState(stored);
  const detailId = item.id;
  
  useEffect(() => {
    getDetail();
    articleSaved();
  }, []);

  const getDetail = async () => {
  ...

    const data = await response.json();
    setDetail(data.data.article_by_pk);
    setDetailImage({ image: { uri: data.data.article_by_pk.feature_image } });
    setIsLoading(false);
  };
  
  const articleSaved = async (tdataId = item.id) => {
    let array = await store.get('articles');
    let newarray = [];
    isSaved
      ? (newarray = array.filter((itm) => itm !== tdataId))
      : array
      ? (newarray = [...array, tdataId])
      : (newarray = [tdataId]);
    store.save('articles', newarray);
    // console.log('newarray ', newarray);
  };

  return (
  ...
            onPress={() => {
              articleSaved();
              setIsSaved((prevState) => !prevState);
            }}  
```
