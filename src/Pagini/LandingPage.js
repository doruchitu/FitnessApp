import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/landingPHOTO.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>FitnessApp</Text>
        <Text style={styles.subtitle}>Bine ai venit!</Text>

        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.separator}>— sau —</Text>

        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.startText}>Continuă fără cont</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 40,
  },
  authButtons: {
    width: '100%',
  },
  loginBtn: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#4a90e2',
  },
  loginText: {
    color: '#4a90e2',
    fontWeight: '600',
    fontSize: 16,
  },
  signupBtn: {
    backgroundColor: '#4a90e2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  separator: {
    marginVertical: 20,
    fontSize: 14,
    color: '#ccc',
  },
  startBtn: {
    backgroundColor: '#27ae60',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
  },
  startText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
