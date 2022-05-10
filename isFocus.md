Focus when at the screen. (auto regen)

From ArticleDetailScreen to 

ArticlesScreen.js
``` js
import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

export default function ArticlesScreen() {
  const isFocused = useIsFocused();
  ...
  useEffect(() => {
    if (isFocused === true) {
      getArticles();
    }
  }, [isFocused]);  
```
ref: https://gitlab.com/findjobssg/armorasia/-/blob/main/src/screens/Reward/MyPointScreen.js
