import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

const StartScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpeg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
          <Text style={styles.title}>MEET YOUR ANIMAL NEED HERE</Text>
          <Text style={styles.subtitle}>New Toys & Healthy Treats Each Month</Text>

        <TouchableOpacity style={styles.button}>
          <Link to="/Main" style={styles.buttonText}>
            Get Started
          </Link>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', // Tetap di tengah secara vertikal
    alignItems: 'center', // Tetap di tengah secara horizontal
  },
  container: {
    justifyContent: 'flex-start', // Posisi konten di bagian atas
    alignItems: 'center',
    padding: 20,
    paddingTop: 80, // Menambahkan jarak dari atas layar
    borderRadius: 10,
    opacity: 10,
    width: '100%', // Memastikan konten memenuhi lebar layar
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffccab',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20, // Menambahkan margin untuk memberikan jarak antara tombol dan teks di atasnya
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
