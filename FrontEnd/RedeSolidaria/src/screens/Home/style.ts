import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  Button: {
    borderRadius: 20,
    shadowOpacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    width: 300,
    height: 70,
    backgroundColor: 'rgb(134, 182, 246)',
  }
});