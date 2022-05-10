button - round corner
===

components/Button/index.js
``` js
import Button from './Button';
export default Button;
```


components/Button/Button.js
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

screens/ArticlesScreen/ArticleDetailScreen.js
``` js
import { Text, Header, View, Button } from '@components';
...
      <View style={styles.attachment}>
        <Button style={{ margin: 10 }} onPress={() => console.log('Button PRESS!!')}>
          {Item.Attachment}
        </Button>
      </View>
```

#### button width go with text by adding `alignItems: `
ArticleItem.js
``` js
import { useStyleSheet, StyleService, useTheme, Icon } from '@ui-kitten/components';

import { Text, View, Button } from '@components';
...
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const IconAttach = () => (
    <Icon style={styles.iconAttach} fill={theme[Color.primary]} name="attach-outline" />
  );  
  ...
            <View style={styles.attachment}>
              <Button style={{ height: 20 }} size="tiny" status="basic" accessoryLeft={IconAttach}>
                {TData.attachment}
              </Button>
            </View>
  ...
  attachment: {
    alignItems: 'flex-start',
  },
```




---
https://stackoverflow.com/posts/57975542/timeline

use TouchableOpacity instead of Button tag as Button is creating styling discrepancies in Android and iOS platforms .
``` js
 <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text> Touch Here </Text>
 </TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})
```

---
### using Styles to create unactive button

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
          <Icon name="attach-outline" width={16} height={16} fill="#3366FF" />
          <Text style={{ fontSize: 12 }}>myDocument.pdf</Text>
        </View>
        <Text style={styles.view2}>w = 150</Text>
        <Text style={styles.view3}>h = 150</Text>
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

  viewButton: {
    flexDirection: 'row',
    backgroundColor: '#f800db',
    margin: 5,
    borderRadius: 30,
    padding: 5,
  }, // view with round corner, button

  view2: { flex: 1, backgroundColor: '#f800db', margin: 5, width: 150, fontSize: 30 },

  view3: { flex: 2, backgroundColor: '#f800db', margin: 5, height: 150 }, // flex, width is double than view1
});
```
### Height
Text fontSize cannot be change for ui Kitten
``` js
import { Button } from '@components';
...
        <Button style={{ height: 43, margin: 8 }} title={t('Next')} />
```
---
