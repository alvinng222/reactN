import React from 'react';
import { Text as ThemeText } from '@ui-kitten/components';
import { Color } from '@constants';
import { StyleSheet } from 'react-native';

export default function Text({ type = 'paragraph', style, color, ...props }) {
  return <ThemeText style={[styles[type], color && { color: color }, style]} {...props} />;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.text,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.text,
  },
  paragraph: {
    fontSize: 14,
    color: Color.text,
  },
  label: {
    fontSize: 12,
    color: Color.label,
  },
});
