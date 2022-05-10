import React from 'react';
import { Color } from '@constants';

import { Button } from '@components';
import { StyleSheet, View } from 'react-native';

export default function Footer({ footerStyle, children, noBorder, ...props }) {
  return (
    <View style={[styles.footer, { borderTopWidth: noBorder ? 0 : 1 }, footerStyle]}>
      {children ? children : <Button {...props} />}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    minHeight: 50,
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopColor: Color.stroke,
    backgroundColor: '#fff',
  },
});
