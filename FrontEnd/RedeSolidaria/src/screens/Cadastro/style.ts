import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#EEF5FF'
    },
    logo:{
        width: 300,
        height: 200,
        borderRadius:20,
    },
    boxTop:{
        height:200,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    boxMid:{
        height:340,
        width:'100%',
        paddingHorizontal:37,
    },
    boxBottom:{
        flexDirection:'row',
        height:100,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    text:{
        marginLeft:5,
        color:'#999',
        fontSize:18,
        marginTop:20
    },
})