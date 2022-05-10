scalable

for development purposes seting the xcode on iphone and ipad size. eg `armorasiaapp.xcodeproj`


src/constants/Formater.js
``` js
import React from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const basePx = 375;

function px(size) {
  if (width > 500) {
    return (size * 450) / basePx;
  }
  return (size * width) / basePx;
}

export { px };
```
src/constants/index.js
``` js
import Color from './Color';
import Config from './Config';
import Layout from './Layout';
import { px } from './Formater';

export { Color, Config, Layout, px };
```
src/components/Text.js
``` js
import React from 'react';
import { Text as ThemeText } from '@ui-kitten/components';
import { Color, px } from '@constants';
import { StyleSheet } from 'react-native';

export default function Text({ type = 'paragraph', style, color, ...props }) {
  return <ThemeText style={[styles[type], color && { color: color }, style]} {...props} />;
}

const styles = StyleSheet.create({
  title: {
    fontSize: px(20),
    fontWeight: 'bold',
    color: Color.text,
  },
  subtitle: {
    fontSize: px(16),
    fontWeight: 'bold',
    color: Color.text,
  },
  paragraph: {
    fontSize: px(14),
    color: Color.text,
  },
  label: {
    fontSize: px(12),
    color: Color.label,
  },
});
```
