import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Color } from '../constants';

export default function TabBarIcon(props) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={[
          styles.image,
          {
            tintColor: props.focused === true ? Color.primary : Color.label,
          },
          props.style,
        ]}
        source={props.focused ? props.selected : props.noSelected}
        resizeMode={'contain'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
