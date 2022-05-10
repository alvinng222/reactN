Text - Reat Native
===
https://reactnative.dev/docs/text

A React component for displaying text.

`Text` supports nesting, styling, and touch handling.

In the following example, the nested title and body text will inherit the `fontFamily` from `styles.baseText`,
but the title provides its own additional styles.
The title and body will stack on top of each other on account of the literal newlines:

``` js
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = useState("This is not really a bird nest.");

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TextInANest;
```

### useTranslation
ArticleItem.js
``` js
import { useTranslation } from 'react-i18next';

export default function ArticleItem({ tdata }) {
  const { t } = useTranslation();

    <Text style={booked ? styles.bookmkTxtMarked : styles.bookmkTxtUnmark}>
      {booked ? t('Saved') : t('Save')}
    </Text>
  );
```
ArticlesScreen.js
``` js
import { useTranslation } from 'react-i18next';

export default function ArticlesScreen() {
  const { t } = useTranslation();
  ...
          <Tab.Screen name={t('Environment')} component={EnvironmtScreen} />
          <Tab.Screen name={t('Health')} component={HealthScreen} />
          <Tab.Screen name={t('Safety')} component={SafetyScreen} />
```

localization/index.js
``` js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import cn from './cn.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  EN: {
    translation: en,
  },
  // TA: {
  //   translation: ta,
  // },
  CN: {
    translation: cn,
  },
  // MY: {
  //   translation: my,
  // },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: 'CN',
    lng: 'EN',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
```
---

you cannot put translation into the data array, cos my component depend on this title to know which is focus

HomeScreen.js
``` js
export default function HomeScreen() {
  const { getToken } = useAuth();

  const TAB = [
    {
      title: 'Event',
      icon: require('@images/home/event.png'),
      iconActive: require('@images/home/eventActive.png'),
      onPress: () => {
        setRoute('Event');
      },
    },
    {
      title: 'News',
      icon: require('@images/home/news.png'),
      iconActive: require('@images/home/newsActive.png'),
```

TabBar.js
``` js
import { useTranslation } from 'react-i18next';

const TabIcon = ({ icon, iconActive, title, onPress, isActive }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, alignItems: 'center' }}
      activeOpacity={0.7}>
      <Image
        source={isActive ? iconActive : icon}
        style={{ width: 44, height: 44, marginBottom: 4 }}
      />
      <Text type="label" style={{ color: isActive ? Color.lightPrimary : Color.label }}>
        {t(title)}
      </Text>
    </TouchableOpacity>
  );
};

export default function TabBar({ tabs = [], route }) {
  ...
```

