import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style';

const Home: React.FC = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo à Página Inicial!</Text>
      <Button title="Clique aqui" onPress={handlePress} />

    </View>
  );
};
