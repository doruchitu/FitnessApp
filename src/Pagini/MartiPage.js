import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const martiAntrenamente = [
  { id: '1', exercitiu: 'Încălzire: Sărituri coardă 5 minute' },
  { id: '2', exercitiu: 'Împins la piept cu gantere - 4 seturi x 12 repetări' },
  { id: '3', exercitiu: 'Ramat cu gantera - 3 seturi x 10 repetări' },
  { id: '4', exercitiu: 'Ridicări laterale umeri - 3 seturi x 15 repetări' },
  { id: '5', exercitiu: 'Plank - 3 seturi a câte 1 minut' },
  { id: '6', exercitiu: 'Stretching 5 minute' },
];

export default function MartiPage() {
  const [completate, setCompletate] = useState({});

  const toggleExercitiu = (id) => {
    setCompletate((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan de antrenament</Text>

      <FlatList
        data={martiAntrenamente}
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
    backgroundColor: '#f1f2f6',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
    color: '#2d3436',
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
    backgroundColor: '#d1e7dd',
  },
  exercitiuText: {
    fontSize: 17,
    color: '#2d3436',
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#4caf50',
  },
});
