import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorarioForm from './src/UI/components/HorarioForm';
import InformeForm from './src/UI/components/InformeForm';
import LoginForm from './src/UI/components/LoginForm';


export default function App() {
  return (
    <View style={styles.container}>
      <Saludar/>
      <Saludar/>
      <Saludar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
