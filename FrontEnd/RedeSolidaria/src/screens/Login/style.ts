import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EEF5FF'
      },

      boxForms: {
        backgroundColor: '#86B6F6',
        height: '40%',
        borderRadius: 15,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
      },

      ButtonLogin: {
        marginTop: 10,
        justifyContent: 'center',
        width: '45%',
        padding: 4,
        backgroundColor: '#176B87',
        borderRadius: 10,
      },

      text: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff',
        marginBottom: 10,
      }, 

      logo: {
        marginTop: 10,
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        width: 300,
        height: 200,
      },

      titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#176B87',
        marginBottom: 50,
      }

});