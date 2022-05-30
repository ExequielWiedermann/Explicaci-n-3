import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorarioForm from './src/UI/components/HorarioForm';
import InformeForm from './src/UI/components/InformeForm';
import LoginForm from './src/UI/components/LoginForm';

//Acá conecto mis pantallas

//El saludar es estático ahora
//      <Saludar/>
//      <Saludar/>
//      <Saludar/>

//Esto es un props
//<View style={styles.container}>
export default function App() {
  return (
    <View style={styles.container}>
    
    <InformeForm/>
    <LoginForm/>
    <HorarioForm/>

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
