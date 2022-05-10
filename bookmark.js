import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-eva-icons'; // not install
import { Icon } from '@ui-kitten/components';

export default function EventScreen() {
  const [booked, setBooked] = useState(false);
  const BookmarkText = () => (
    <Text style={booked ? { fontSize: 12, fontWeight: 'bold' } : { fontSize: 12 }}>
      {booked ? 'Saved' : 'Save'}
    </Text>
  );
  const Bookmark = () => (
    <Icon name={booked ? 'bookmark' : 'bookmark-outline'} width={16} height={16} fill="#3366FF" />
  );

  return (
    <SafeAreaView style={styles.viewbody}>
      <View style={styles.bookmkParent}>
        <TouchableOpacity
          style={styles.bookmk}
          onPress={() => setBooked((previousState) => !previousState)}>
          <BookmarkText />
          <Bookmark />
        </TouchableOpacity>
        <Text style={styles.view2}>w = 150</Text>
        <Text style={styles.view3}>h = 150</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bookmkParent: {
    flexDirection: 'row',
    // justifyContent: 'space-around', // not function //space the items on this main axis
    alignItems: 'center', // space the items along the cross axis
    paddingTop: 40,
    backgroundColor: '#ddd',
  },

  bookmk: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    margin: 5,
    borderRadius: 30,
    padding: 5,
  }, // view with round corner, button

  view2: { flex: 1, backgroundColor: 'pink', margin: 5, width: 150, fontSize: 30 },

  view3: { flex: 2, backgroundColor: 'pink', margin: 5, height: 150 }, // flex, width is double than view1
});
