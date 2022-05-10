styles
---

### snippet for styles

``` js
        <View style={[styles.attachment, { alignItems: 'center' }]}>
```

ArticleItem.js **was**
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
        <View style={[styles.attachment, { alignItems: 'center' }]}>
          <Button
            style={{ padding: 4 }}
            size="small"
            appearance="outline" // temporary
            accessoryLeft={IconAttach}>
            {TData.attachment}
          </Button>
        </View>

  ...
  attachment: {
    // height: 20,
  },
```
