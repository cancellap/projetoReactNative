import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
    },
    safeArea: {
        flex: 0,
        //borderRadius: 20,
        borderEndEndRadius: 20,
        borderStartEndRadius: 20,
        backgroundColor: '#176B87',
    },
    title: {
        
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
})