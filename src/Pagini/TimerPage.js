import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);
  return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}.${milliseconds.toString().padStart(2,'0')}`;
}

export default function TimerPage() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (running) return;
    setRunning(true);
    const startTime = Date.now() - time;
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10);
  };

  const pauseTimer = () => {
    if (!running) return;
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const lapTimer = () => {
    if (!running) return;
    setLaps([time, ...laps]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: running ? '#f39c12' : '#27ae60' }]} onPress={running ? pauseTimer : startTimer}>
          <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#3498db' }]} onPress={lapTimer} disabled={!running}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#e74c3c' }]} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {laps.length > 0 && (
        <View style={styles.lapsContainer}>
          <Text style={styles.lapsTitle}>Laps</Text>
          <FlatList
            data={laps}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.lapItem}>
                <Text style={styles.lapText}>#{laps.length - index}</Text>
                <Text style={styles.lapText}>{formatTime(item)}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  clockContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 72,
    color: '#00e676',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 40,
    elevation: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  lapsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 20,
  },
  lapsTitle: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  lapItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  lapText: {
    color: '#ccc',
    fontSize: 18,
    fontVariant: ['tabular-nums'],
  },
});
