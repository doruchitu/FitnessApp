import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function BMIPage() {
  const [inaltime, setInaltime] = useState('');
  const [greutate, setGreutate] = useState('');
  const [bmi, setBmi] = useState(null);
  const [categorie, setCategorie] = useState('');

  const calculeazaBMI = () => {
    const h = parseFloat(inaltime) / 100; // cm to m
    const g = parseFloat(greutate);
    if (!h || !g) return;

    const bmiCalc = g / (h * h);
    setBmi(bmiCalc.toFixed(1));

    if (bmiCalc < 18.5) setCategorie('Subponderal');
    else if (bmiCalc < 25) setCategorie('Greutate normală');
    else if (bmiCalc < 30) setCategorie('Supraponderal');
    else setCategorie('Obezitate');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Calculator BMI</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Înălțime (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 170"
          keyboardType="numeric"
          value={inaltime}
          onChangeText={setInaltime}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Greutate (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 65"
          keyboardType="numeric"
          value={greutate}
          onChangeText={setGreutate}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculeazaBMI}>
        <Text style={styles.buttonText}>Calculează</Text>
      </TouchableOpacity>

      {bmi && (
        <View style={styles.resultCard}>
          <Text style={styles.resultText}>BMI-ul tău este:</Text>
          <Text style={styles.bmiValue}>{bmi}</Text>
          <Text style={[styles.categorie, {
            color:
              categorie === 'Subponderal' ? '#3498db' :
              categorie === 'Greutate normală' ? '#27ae60' :
              categorie === 'Supraponderal' ? '#f39c12' :
              '#e74c3c'
          }]}>
            {categorie}
          </Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f5f6fa',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    color: '#a4b0be',
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#2f3542',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    color: '#f5f6fa',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3742fa',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3742fa',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#f5f6fa',
    fontSize: 20,
    fontWeight: '700',
  },
  resultCard: {
    marginTop: 40,
    backgroundColor: '#2f3542',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  resultText: {
    fontSize: 18,
    color: '#dcdde1',
  },
  bmiValue: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#f5f6fa',
    marginVertical: 10,
  },
  categorie: {
    fontSize: 22,
    fontWeight: '600',
  },
});
