

https://reactnative.dev/docs/flatlist
``` js
import React from "react";
import { View, FlatList, Text,} from "react-native";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];

const ItemGrp = ({ thisData }) => (
    <Text>{thisData.title + "! "}</Text>
);


const App = () => {
    const renderItem = ({ item }) => {
        return (
            <ItemGrp  thisData={item} />
        );
    };

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};


export default App;
```

`renderItem({ item, index, separators });`



convert from `Export Default Function`
``` js
import React from 'react';
import { useStyleSheet, StyleService, Card } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { Color } from '@constants';
import { Text, Header, View } from '@components';
import { useTranslation } from 'react-i18next';

const Header2 = (props) => (
  <View {...props}>
    <Text category="h6">SAFETYFIRST</Text>
  </View>
);

// export default function ArticleItem() {
//   const styles = useStyleSheet(themedStyles);
//   const { t } = useTranslation();
const CardSimpleUsageShowcase = (props) => {
  return (
    <Card header={Header2}>

      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia, located
        in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about
        1,000 kilometres (620 mi) from the Asian continent
      </Text>
    </Card>
  );
};

//   return <CardSimpleUsageShowcase />;
// }
export default CardSimpleUsageShowcase;

const themedStyles = StyleService.create({
  safeAreaView: {
    backgroundColor: Color.bgDefault,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
```
---
### onRefresh
HomeScreen.js
``` js
import React, { useEffect, useState } from 'react';
import EventList from './EventList/EventList';
import { store } from '../../functions';

export default function HomeScreen() {
...
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [event, setEvent] = useState([]);
  const [route, setRoute] = useState('Event');

  useEffect(() => {
    setIsLoading(true);
    getEventRegistration();
    getEvent();
    getNews();
    setIsLoading(false);
  }, []);

  const getEventRegistration = async () => {
    const query = `
      query getUserRegistration($userID: String) {
      ...
    if (data.data.event_participants && data.data.event_participants.length > 0) {
      const eventRegistration = data.data.event_participants.map((item) => {
        return { event: item?.id };
      });
      await store.save('event_participants', eventRegistration);
    } else {
      await store.save('event_participants', []);
    }
  };
  
  const getEvent = async () => {
    const dates = new Date  
    ...
    setEvent(data.data.event);
  };    
  ...

  return (
  ...
        <>
          <TabBar tabs={TAB} route={route} />
          {route === 'Event' && <EventList event={event} onRefresh={getEvent} />}
          {route === 'News' && <NewsList news={news} onRefresh={getNews} />}
        </>  
```
EventList.js
``` js
export default function EventList({ event, onRefresh }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  return (
    <FlatList
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      contentContainerStyle={{ flexGrow: 1 }}
```
