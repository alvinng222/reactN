import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ArticlesScreen from '../screens/ArticlesScreen';
import { VideoScreen } from '../screens/Video';
import AboutMeScreen from '../screens/AboutMeScreen';
import { ReportScreen } from '../screens/ReportScreen';
// import { useTheme } from 'react-native-paper';
import TabBarIcon from '../components/TabBarIcon';

import Text from '@components/Text';
import { Color } from '@constants';
import { useSafeArea } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const TabBarLabel = ({ focused, label }) => {
  const { t } = useTranslation();
  return (
    <Text
      style={{
        color: focused ? Color.primary : Color.label,
        fontSize: 11,
        paddingBottom: 8,
        textAlign: 'center',
      }}>
      {t(label)}
    </Text>
  );
};

function MainTabs() {
  const insets = useSafeArea();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarAdaptive: false,
        headerShown: false,
        activeTintColor: Color.primary,
        inactiveTintColor: Color.label,
        tabBarStyle: {
          borderTopWidth: 1,
          height: 56 + insets.bottom,
          borderTopColor: Color.bgGrey,
          paddingHorizontal: 16,
          backgroundColor: Color.bgDefault,
          paddingVertical: 4,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => <TabBarLabel label="What's New" {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              selected={require('../assets/images/icons/bottomTab/homeActive.png')}
              noSelected={require('../assets/images/icons/bottomTab/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        component={VideoScreen}
        name="Video"
        options={{
          tabBarLabel: (props) => <TabBarLabel label="Video" {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              selected={require('../assets/images/icons/bottomTab/videoActive.png')}
              noSelected={require('../assets/images/icons/bottomTab/video.png')}
              style={{ marginLeft: 1 }} // to move it abit to the right
            />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          tabBarLabel: (props) => <TabBarLabel label="Report" {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              selected={require('../assets/images/icons/bottomTab/reportActive.png')}
              noSelected={require('../assets/images/icons/bottomTab/report.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ArticlesBottomTab"
        component={ArticlesScreen}
        options={{
          tabBarLabel: (props) => <TabBarLabel label="Articles" {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              selected={require('../assets/images/icons/bottomTab/articlesActive.png')}
              noSelected={require('../assets/images/icons/bottomTab/articles.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AboutMe"
        component={AboutMeScreen}
        options={{
          tabBarLabel: (props) => <TabBarLabel label="About Me" {...props} />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              selected={require('../assets/images/icons/bottomTab/aboutMeActive.png')}
              noSelected={require('../assets/images/icons/bottomTab/aboutMe.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
