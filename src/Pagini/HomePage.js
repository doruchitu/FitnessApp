import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  const [antrenamente, setAntrenamente] = useState([
    { id: '1', denumire: 'Cardio Intensiv', minute: 30, sesiuni: 4 },
    { id: '2', denumire: 'Forță Picioare', minute: 45, sesiuni: 3 },
    { id: '3', denumire: 'Extensii de picioare', minute: 20, sesiuni: 2 },
    { id: '4', denumire: 'Ridicări laterale', minute: 15, sesiuni: 3 },
    { id: '5', denumire: 'Ridicări frontale', minute: 15, sesiuni: 2 },
    { id: '6', denumire: 'Flexii biceps', minute: 10, sesiuni: 2 },
  ]);

  const [denumire, setDenumire] = useState('');
  const [minute, setMinute] = useState('');
  const [sesiuni, setSesiuni] = useState('');

  const adaugaAntrenament = () => {
    if (!denumire || !minute || !sesiuni) return;

    const nou = {
      id: Date.now().toString(),
      denumire,
      minute: parseInt(minute),
      sesiuni: parseInt(sesiuni),
    };

    setAntrenamente([...antrenamente, nou]);
    setDenumire('');
    setMinute('');
    setSesiuni('');
  };

  const stergeAntrenament = (id) => {
    setAntrenamente(antrenamente.filter((a) => a.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bine ai revenit!</Text>

      <View style={styles.buttonGrid}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutHistory', { antrenamente })}
        >
          <Text style={styles.navButtonText}>Istoric</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('StepCounter')}
        >
          <Text style={styles.navButtonText}>Pedometer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Timer')}
        >
          <Text style={styles.navButtonText}>Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('BMI')}
        >
          <Text style={styles.navButtonText}>BMI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutPlan')}
        >
          <Text style={styles.navButtonText}>Plan antrenament</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.navButton}
  onPress={() => navigation.navigate('Profile')}
>
  <Text style={styles.navButtonText}>Profil</Text>
</TouchableOpacity>

      </View>

      <Text style={styles.sectionTitle}>Adaugă antrenament:</Text>
      <TextInput
        style={styles.input}
        placeholder="Denumire"
        value={denumire}
        onChangeText={setDenumire}
      />
      <TextInput
        style={styles.input}
        placeholder="Minute"
        value={minute}
        onChangeText={setMinute}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Sesiuni"
        value={sesiuni}
        onChangeText={setSesiuni}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.addButton} onPress={adaugaAntrenament}>
        <Text style={styles.addButtonText}>Adaugă</Text>
      </TouchableOpacity>

      <FlatList
        data={antrenamente}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>
              {item.denumire} - {item.minute} min - {item.sesiuni} sesiuni
            </Text>
            <TouchableOpacity onPress={() => stergeAntrenament(item.id)}>
              <Text style={styles.deleteText}>Șterge</Text>
            </TouchableOpacity>
          </View>
        )}
        style={{ marginTop: 10 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#2d3436',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  navButton: {
    backgroundColor: '#0984e3',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    width: '48%',
    alignItems: 'center',
    elevation: 4,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  addButton: {
    backgroundColor: '#00b894',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemBox: {
    backgroundColor: '#dff9fb',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 16,
    color: '#2d3436',
  },
  deleteText: {
    color: 'red',
    fontWeight: '600',
  },
});
