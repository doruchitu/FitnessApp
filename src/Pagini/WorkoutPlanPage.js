import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WorkoutPlanPage() {
  const navigation = useNavigation();

  const zile = [
    { zi: 'Luni', screen: 'Luni' },
    { zi: 'Marți', screen: 'Marti' },
    { zi: 'Miercuri', screen: 'Miercuri' },
    { zi: 'Joi', screen: 'Joi' },
    { zi: 'Vineri', screen: 'Vineri' },
    { zi: 'Sâmbătă', screen: 'Sambata' },
    { zi: 'Duminică', screen: 'Duminica' },
  ];

  return (
    <ImageBackground
      source={require('../../assets/planPhoto.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Plan Săptămânal de Antrenament</Text>
        <FlatList
          data={zile}
          keyExtractor={(item) => item.zi}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.buttonText}>{item.zi}</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  list: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(116, 185, 255, 0.85)',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
