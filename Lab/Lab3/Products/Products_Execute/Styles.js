import { StatusBar, StyleSheet } from 'react-native';
export default styles= StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item:{
        backgroundColor: '#f9c2ff',
        padding :20,
        marginVertical: 8,
        marginHorizontal:16,
    },
    title:{
        fontSize:32,
    },
    script:{
        fontSize:16,
    },
    images:{
       width:200,
       height:100,
       borderRadius:10,
       backgroundColor:'#f9c2ff'
    },
    input :{
        width:200,
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10,
        padding:10
    },
    button :{
        backgroundColor:'#EF506B',
        borderRadius:10,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
        padding:12,
        marginTop:16,
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#FFF',
    },
});