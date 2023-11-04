import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  containerInput:{
    flexDirection:'row',
    alignItems:'center',
    padding:8,
  },  
  textoInput:{
    fontWeight:"bold",
    height:'auto',
    padding:8,
    fontSize:16
  },
  botaoConsultar:{
    backgroundColor:'#000',
    alignItems:'center',
    paddingTop:8,
    paddingBottom:8,
    borderRadius:10,
  },
  textoBotaoConsultar:{
    color:'#fff',
    fontWeight:'bold'    
  },
  containerResposta:{
    marginTop:20,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    padding:8
  },
  
})

export default style