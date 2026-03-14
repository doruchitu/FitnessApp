import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function WorkoutHistoryPage({ route }) {
  const { antrenamente } = route.params;

  return (
    <ImageBackground
      source={require('../../assets/historyPHOTO.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Istoric Antrenamente</Text>
        <FlatList
          data={antrenamente}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>
                {item.denumire} - {item.minute} min - {item.sesiuni} sesiuni
              </Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
    textAlign: 'center',
  },
  item: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    marginVertical: 6,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#2d3436',
  },
});
