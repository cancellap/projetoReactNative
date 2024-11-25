import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 50, 
  },
  arrowButton: {
    padding: 10, 
  },
  editButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#176B87',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#28a745', 
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    padding: 12,
    backgroundColor: '#dc3545', 
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
