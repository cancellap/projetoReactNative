import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(238, 245, 255)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle:{
    fontSize: 18,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  Button: {
    borderRadius: 20,
    shadowOpacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 70,
    backgroundColor: 'rgb(134, 182, 246)',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});