import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import style from "./syles";

export default function Home(props) {   
  return (
    <View>
      <View style={style.containerInput}>
        <Text style={style.textoInput}>Informe o seu cep: </Text>
        <TextInput
          placeholder="Informe o cep aqui!"
          style={style.texto}
          keyboardType="numeric"
          onChangeText={(e)=>props.montaCep(e)}
          
        />
      </View>
      <View>
        <TouchableOpacity style={style.botaoConsultar} onPress={() => props.clicar()}>
          <Text style={style.textoBotaoConsultar}>Consultar CEP</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerResposta}>
        <Text>{props.resposta?.cep}</Text>
        <Text>{props.resposta?.state}</Text>
        <Text>{props.resposta?.city}</Text>
        <Text>{props.resposta?.neighborhood}</Text>
        <Text>{props.resposta?.street}</Text>
        <Text>{props.resposta?.service}</Text>
      </View>

    </View>
  );
}
