## function hooks

ArticleItem.js component
``` js
import React from 'react';
import { Text, View } from '@components';

const ArticleItem = ({ TData }) => (
  <View>
    <Text>{TData.Title}</Text>
  </View>
);

export default ArticleItem;

```
ArticleItem.js function
``` js
import React from 'react';
import { Text, View } from '@components';

export default function ArticleItem({ TData }) {
  return (
    <View>
      <Text>{TData.Title}</Text>
    </View>
  );
}
```

### Hooks can only be called inside of the body of a function component. 
ArticleItem.js function w Hooks
``` js
import React from 'react';
import { useStyleSheet, StyleService } from '@ui-kitten/components';
import { Text, View } from '@components';

const BookmarkOutline = (props) => <Icon {...props} name="bookmark-outline" />;

export default function ArticleItem({ TData }) {
  const styles = useStyleSheet(themedStyles);
  return (
    <View>
      <Text type="label" style={styles.label}>
        {TData.Title}
      </Text>
    </View>
  );
}
const themedStyles = StyleService.create({
  label: {
    fontSize: 10,
  },
});

```
ArticleList.js
``` js
...
import ArticlesData from './testData'; 
import ArticleItem from './ArticleItem';

export default function ArticlesList({ category }) {
  const dataFilter = ArticlesData.filter((d) => d.Category === category);

  const ArticleShowcase = () => {
    const renderItem = ({ item }) => {
      return <ArticleItem TData={item} />;
    };
    return (
      <View>
        <FlatList data={dataFilter} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    );
  };

  return <ArticleShowcase />;
}
```

### function in function
``` js
...
  const ArticleShowcase = () => {
    const renderItem = ({ item }) => {
      return <ArticleItem TData={item} />;
    };
    return (
      <View>
        <FlatList data={dataFilter} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
    );
  };

  return <ArticleShowcase />;
}

const themedStyles = StyleService.create({
...
```
to
``` js
...

  const renderItem = ({ item }) => {
    return <ArticleItem TData={item} />;
  };
  return (
    <View>
      <FlatList data={dataFilter} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const themedStyles = StyleService.create({
...
``` js
```


ArticlesScreen.js
``` js
export default function ArticlesScreen() {
...
  function EnvironmtScreen() {
    return <ArticlesList articlesData={articlesData} category={'Environment'} />;
  }
  
  return (

```
---
### add function in arrow function
``` js
<Header onBack={() => navigation.goBack()} title={t('Saved articles')} />
```
TO
``` js
     <Header
        onBack={() => {
          navigation.goBack();
          console.log('anything');
        }}
        title={t('Saved articles')}
      />
```
