
## Tabs
https://rn.mobile.ant.design/components/tabs/

Basic Tabs
``` js
import React from 'react';
import { Text, View } from 'react-native';
import { Tabs } from '@ant-design/react-native';

export default class BasicTabsExample extends React.Component {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    return (
      <View>
        <Tabs tabs={tabs}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </View>
    );
  }
}
```
Tabs custom styles
``` js
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';

export default class BasicTabsExample extends React.Component {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    return (
      <View>
        <Text style={{ margin: 16 }}>Custom RenderTabBar</Text>
        <Tabs
          tabs={tabs}
          renderTabBar={tabProps => (
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {tabProps.tabs.map((tab, i) => (
                // change the style to fit your needs
                <TouchableOpacity
                  activeOpacity={0.9} // ?
                  key={tab.key || i}  // ?
                  style={{
                    // width: '30%',
                    padding: 6,
                  }}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps;
                    // tslint:disable-next-line:no-unused-expression
                    onTabClick && onTabClick(tabs[i], i);
                    // tslint:disable-next-line:no-unused-expression
                    goToTab && goToTab(i);
                  }}
                >
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? 'green' : undefined,
                    }}
                  >
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        >
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
      </View>
    );
  }
}
```
ScrollView
``` js
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Tabs } from '@ant-design/react-native';
const renderContent = (tab, index) => {
  const style = {
    paddingVertical: 40,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  };
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
    return (
      <View key={`${index}_${i}`} style={style}>
        <Text>
          such as {tab.title} - {i}
        </Text>
      </View>
    );
  });
  return <ScrollView>{content}</ScrollView>;
};
export default class BasicTabsExample extends React.Component {
  render() {
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
    ];
    return (
        <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {renderContent}
          </Tabs>
        </View>
    );
  }
}
```

findjobs > HomeScreen.js
``` js
import { Tabs } from '@ant-design/react-native';

class HomeScreen extends Component {
...
  render() {
    ...
    const tabs = [{ title: 'All Jobs' }, { title: 'Employers' }, { title: 'Recruiters' }];
    ...
    return (
    ...
            <View style={{ flex: 1 }}>
              <Tabs
                tabs={tabs}
                tabBarUnderlineStyle={{
                  backgroundColor: Color.tintColor,
                }}
                initialPage={1}
                renderTabBar={(tabProps) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      backgroundColor: '#fff',
                    }}>
                    {tabProps.tabs.map((tab, i) => (
                      // change the style to fit your needs
                      <TouchableOpacity
                        activeOpacity={0.9}
                        key={tab.key || i}
                        style={{
                          width: '33.33%',
                          paddingVertical: px(12),
                          padding: px(6),
                          borderBottomWidth: tabProps.activeTab === i ? px(2) : 0,
                          borderColor: Color.tintColor,
                        }}
                        onPress={() => {
                          const { goToTab, onTabClick } = tabProps;
                          // tslint:disable-next-line:no-unused-expression
                          onTabClick && onTabClick(tabs[i], i);
                          // tslint:disable-next-line:no-unused-expression
                          goToTab && goToTab(i);
                        }}>
                        <Text
                          style={{
                            color: tabProps.activeTab === i ? Color.tintColor : Color.HeadlineColor,
                            fontSize: px(14),
                            fontWeight: tabProps.activeTab === i ? 'bold' : undefined,
                            textAlign: 'center',
                          }}>
                          {tab.title}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}>
                <View style={styles.tabs}>
                ...
                <View style={styles.tabs}>
                ...
                <View style={styles.tabs}>
                ...
              </Tabs>
            </View>
```

---
