import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>;

  if (!history || history.length === 0) return  <Text style={styles.title}>We havent focused on anything yet</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    padding : spacing.sm,
    flex : 1
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    // padding : spacing.sm
  },
});
