import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes';
export const Focus = ({ currentSubject, setCurrentSubject }) => {
  const [subject, setSubject] = useState('');

  const handleAddClick = () => {
    if (subject) {
      setCurrentSubject(subject);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={subject}
          onChangeText={(val) => setSubject(val)}
          label={'What would you like to focus on?'}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={handleAddClick} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
