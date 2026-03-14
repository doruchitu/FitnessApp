import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

export default function StepCounterPage() {
  const [steps, setSteps] = useState(0);
  const goal = 10000;

  
  const progress = Math.min(steps / goal, 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedometru</Text>

      <View style={styles.stepCountContainer}>
        <Text style={styles.stepCount}>{steps}</Text>
        <Text style={styles.stepGoal}>/ {goal} pași</Text>
      </View>

      <View style={styles.progressBarBackground}>
        <Animated.View
          style={[
            styles.progressBarFill,
            { width: `${progress * 100}%` },
          ]}
        />
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setSteps(prev => Math.min(prev + 100, goal))}
      >
        <Text style={styles.addButtonText}>Adaugă 100 pași</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e272e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#00d8ff',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  stepCountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  stepCount: {
    fontSize: 72,
    color: '#fff',
    fontWeight: '900',
  },
  stepGoal: {
    fontSize: 24,
    color: '#aaa',
    marginLeft: 10,
    marginBottom: 12,
  },
  progressBarBackground: {
    width: '90%',
    height: 20,
    backgroundColor: '#485460',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 40,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00d8ff',
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#00a8ff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
