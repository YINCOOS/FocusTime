import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log('subjects', subject);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setSubject}
            label="What would you like to focus on?"
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
