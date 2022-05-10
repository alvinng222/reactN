Icon
===
direct icon

``` js
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'react-native-eva-icons'; // not install
import { Icon } from '@ui-kitten/components';

export default function EventScreen() {
  return (
    <SafeAreaView style={styles.viewbody}>
      <View style={styles.viewparent}>
        <View style={styles.viewButton}>
          <Text>Github Icon</Text>
          <Icon name="github" width={24} height={24} fill="#3366FF" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewparent: {
    flexDirection: 'row',
    // justifyContent: 'space-around', // not function //space the items on this main axis
    alignItems: 'center', // space the items along the cross axis
    paddingTop: 40,
    backgroundColor: '#ddd',
  },

  viewButton: { backgroundColor: '#f800db', margin: 5, borderRadius: 30, padding: 5 }, // view with round corner, button
});

```


---
Icon ui-kitten
---

### toggle bookmark
``` js
import React, { useState } from 'react';
  ...
  const [isSaved, setIsSaved] = useState(false);
...
                name={isSaved ? 'bookmark' : 'bookmark-outline'}
            ...
            onPress={() => setIsSaved((prevState) => !prevState)}
```
### attach_outline
``` js
import React from 'react';
import { useStyleSheet, StyleService, Icon, useTheme } from '@ui-kitten/components';
import { SafeAreaView, ScrollView } from 'react-native';
import { Color } from '@constants';
import { View, Button } from '@components';

export default function ArticleDetailScreen({ route, navigation }) {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  const item = new Object();
  item.attachment = 'Jordan';

  const IconAttach = () => (
    <Icon style={styles.iconAttach} fill={theme[Color.stroke]} name="attach-outline" />
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>{/* ... */}</ScrollView>
      {item && item?.attachment != null && (
        <View style={styles.bottomView}>
          <View style={{ width: 300 }}>
            <Button
              style={{ margin: 15 }}
              onPress={() => console.log('Button PRESS!!')}
              accessoryLeft={IconAttach}>
              {item.attachment}
            </Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const themedStyles = StyleService.create({
  iconAttach: {
    width: 19,
    height: 19,
  },
});
```
Button.js
``` js
/**
 * @param props
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button as ThemeButton } from '@ui-kitten/components';

export default function Button({ style, ...props }) {
  return (
    <ThemeButton style={[{ borderRadius: 50 }, style]} {...props}>
      {props.children}
      {props.title}
    </ThemeButton>
  );
}

```



### ArticleDetailScreen.js for icon `Bookmark` and `attach-outline`
``` js
import React, { useState } from 'react';
import {
  useStyleSheet,
  StyleService,
  TopNavigationAction,
  Icon,
  useTheme,
} from '@ui-kitten/components';
import { SafeAreaView, Image, ScrollView } from 'react-native';
import { Color } from '@constants';
import { Text, Header, View, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';

export default function ArticleDetailScreen({ route, navigation }) {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const { t } = useTranslation();

  const [isSaved, setIsSaved] = useState(false);

  // const toggleSaved = () => {
  //   if (isSaved) {
  //     setIsSaved(false);
  //     return;
  //   }
  //   setIsSaved(true);
  // };

  // function bookmark(a) {
  //   return a ? 'bookmark' : 'bookmark-outline';
  // }

  const item = useRoute().params.item;
  // const { item } = route.params;

  const IconAttach = () => (
    <Icon style={styles.icon} fill={theme[Color.stroke]} name="attach-outline" />
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        onBack={() => navigation.goBack()}
        accessoryRight={() => (
          <TopNavigationAction
            icon={(props) => (
              <Icon
                {...props}
                name={isSaved ? 'bookmark' : 'bookmark-outline'}
                fill={theme[Color.label]}
              />
            )}
            // onPress={() => console.log('bookmarking')}
            onPress={() => setIsSaved((prevState) => !prevState)}
          />
        )}
      />
      <ScrollView style={styles.container}>

       ...
       
      </ScrollView>
      {item && item?.Attachment != null && (
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: 300 }}>
            <Button
              style={{ margin: 15 }}
              onPress={() => console.log('Button PRESS!!')}
              accessoryLeft={IconAttach}>
              {item.Attachment}
            </Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const themedStyles = StyleService.create({
  ...
  icon: {
    width: 19,
    height: 19,
  },
});

```
---
### On and Off bookmark
ArticlesList.js
``` js
  const renderItem = ({ item }) => {
    return <ArticleItem tdata={item} savedArticles={savedArticles} shownBookmark={true} />;
  };
```
SavedArticlesScreen.js
``` js
  const renderItem = ({ item }) => {
    return <ArticleItem tdata={item} savedArticles={articlesList} shownBookmark={false} />;
  };
```
ArticleItem.js
``` js
export default function ArticleItem({ tdata, savedArticles, shownBookmark }) {
...
          </View>
          {shownBookmark && (
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
          )}
        </View>
```
---
### modify
https://github.com/akveo/react-native-ui-kitten/issues/1014

When there is a need to modify the existing props, keep in mind that you should also keep the initial stylings provided by the library.
``` js
// 1. Notice we have the props here. Provided by Eva and UI Kitten
// 2. In case of using `@ui-kitten/eva-icons` the icon you render is react-native-svg element,
//    so, to change the color you should use `fill` property
// 3. To extend or modify the initial stylings, we may use arrays.
const StarIcon = (props) => (
  <Icon {...props} style={[props.style, { width: 32, height: 32 }]} fill='red' name='star' />
);

<Button accessoryLeft={StarIcon} />
```
ArticleItem.js
``` js
import { Icon } from '@ui-kitten/components';
...
              <Icon
                name={booked ? 'bookmark' : 'bookmark-outline'}
                fill={booked ? 'black' : Color.label}
                width={21}
                height={21}
              />
```
