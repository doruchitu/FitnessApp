import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const sambataPlan = [
  { id: '1', exercitiu: 'Plimbare ușoară 30 minute' },
  { id: '2', exercitiu: 'Yoga / stretching 20 minute' },
  { id: '3', exercitiu: 'Meditație 10 minute' },
  { id: '4', exercitiu: 'Mic dejun bogat în proteine și fibre' },
  { id: '5', exercitiu: 'Gustare: Fructe proaspete' },
  { id: '6', exercitiu: 'Cină ușoară: Salată verde cu pui la grătar' },
];

export default function SambataPage() {
  const [completate, setCompletate] = useState({});

  const toggleExercitiu = (id) => {
    setCompletate((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan lejer</Text>

      <FlatList
        data={sambataPlan}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              completate[item.id] && styles.cardCompleted,
            ]}
            onPress={() => toggleExercitiu(item.id)}
            activeOpacity={0.8}
          >
            <Text style={[styles.exercitiuText, completate[item.id] && styles.textCompleted]}>
              {item.exercitiu}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
    color: '#34495e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardCompleted: {
    backgroundColor: '#b2dfdb',
  },
  exercitiuText: {
    fontSize: 17,
    color: '#34495e',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#00796b',
  },
});
