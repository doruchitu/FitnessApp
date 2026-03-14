import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfilePage() {
  const user = {
    name: 'Andrei Popescu',
    email: 'andrei.popescu@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12', // poza random avatar
    workoutsDone: 42,
    stepsCount: 15000,
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.workoutsDone}</Text>
          <Text style={styles.statLabel}>Antrenamente făcute</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{user.stepsCount}</Text>
          <Text style={styles.statLabel}>Pași</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editează Profilul</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={[styles.buttonText, { color: '#e74c3c' }]}>Deconectare</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4a90e2',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
  },
  email: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 40,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#34495e',
  },
  statLabel: {
    fontSize: 14,
    color: '#95a5a6',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#ecf0f1',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
