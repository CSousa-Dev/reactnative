import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Home from "./src/Home";
export default function App() {
  const [data, setData] = useState(null);
  const [cep, setCep] = useState(null);

  // URL da API que vamos consultar
  const urlBase = "https://brasilapi.com.br/api/cep/v1/";

  // Função assíncrona para fazer a consulta usando async/await

  const consultarCep = async () => {
    setData;
    try {
      // Fazendo a requisição usando fetch com await
      const response = await fetch(`${urlBase}{${cep}}`);

      // Parseando a resposta para JSON com await
      const data = await response.json();
      // Verifica se a resposta da requisição foi bem-sucedida
      if (data?.message != null) alert(data?.message)

      // Manipula os dados recebidos da API

      setData(data);

      // Aqui você pode fazer o que quiser com os dados, como exibir na página HTML
    } catch (error) {
      // Captura e trata erros da requisição

      setData(error);
    }
  };

  // Chamando a função assíncrona para fazer a consulta quando o script é executado

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home resposta={data} montaCep={setCep} clicar={consultarCep} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
