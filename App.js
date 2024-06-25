// Importa bibliotecas e componentes necessários do React, React Native e React Native Picker
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

// Componente principal da aplicação
export default function App() {
  // Declara um estado para armazenar o carro selecionado
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  // Declara um estado para armazenar a lista de carros
  const [carros, setCarros] = useState([
    { key: 1, nome: 'Golf 1.6', valor: 62.000 },
    { key: 2, nome: 'Saveiro 1.6', valor: 29.300 },
    { key: 3, nome: 'Gol 1.0', valor: 25.200 },
    { key: 4, nome: 'Sedan 1.0', valor: 25.000 },
    { key: 5, nome: 'Nissan 1.0', valor: 50.000 }
  ]);

  // Mapeia a lista de carros para criar os itens do Picker
  let carrosItem = carros.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />;
  });

  // Retorna o layout da aplicação
  return (
    <View style={styles.container}>
      {/* Picker para selecionar o carro */}
      <Picker
      // Valor selecionado
        selectedValue={carroSelecionado} 
        // Atualiza o valor selecionado
        onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)} 
      >
        {/* Renderiza os itens do Picker */}
        {carrosItem} 
      </Picker>

      {/* Exibe o nome do carro selecionado */}
      <Text style={styles.carros}>Carro: {carros[carroSelecionado].nome}</Text>
      {/* Exibe o valor do carro selecionado */}
      <Text style={styles.carros}>Valor: R$ {carros[carroSelecionado].valor.toFixed(3)}</Text>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    marginTop: 35 // Adiciona margem no topo
  },
  carros: {
    marginTop: 15, // Adiciona margem no topo
    fontSize: 25 // Define o tamanho da fonte
  }
});
