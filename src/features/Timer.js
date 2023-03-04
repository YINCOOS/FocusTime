import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, Vibration} from 'react-native';
import {ProgressBar} from 'react-native-paper';
// import {KeepAwake} from 'react-native-keep-awake';
import {Countdown} from '../components/Countdown';
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';
import {colors} from '../utils/colors';
import {Timing} from './Timing';


const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    // Vibration.vibrate(PATTERN);
    setMinutes(0.1);
    setProgress(1);
    setIsStarted(false);
    reset();
    onTimerEnd(focusSubject);
  }
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={progress => setProgress(progress)}
          onEnd={onEnd}
        />

        <View style={{paddingTop: spacing.xxl}}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{paddingTop: spacing.xl}}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{height: spacing.sm}}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton title="Clear" size={60} onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: spacing.sm,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
});
