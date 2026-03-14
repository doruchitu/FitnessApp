import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const duminicaPlan = [
  { id: '1', exercitiu: 'Plimbare în natură 30 minute' },
  { id: '2', exercitiu: 'Respirație profundă și relaxare 15 minute' },
  { id: '3', exercitiu: 'Stretching ușor 10 minute' },
  { id: '4', exercitiu: 'Mic dejun: Smoothie cu fructe și legume' },
  { id: '5', exercitiu: 'Prânz: Supă de legume și salată' },
  { id: '6', exercitiu: 'Cină: Pește la grătar cu legume' },
];

export default function DuminicaPage() {
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
        data={duminicaPlan}
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
    backgroundColor: '#ffe0b2',
  },
  exercitiuText: {
    fontSize: 17,
    color: '#34495e',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#ef6c00',
  },
});
