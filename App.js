import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState("Frasses do dia...")
  const frases = [
    'A vida é uma coisa boa se tiveres paciencia',
    'O homem comum fala, o sábio escuta, o tolo discute.',
    'Os sábios não dizem o que sabem, os tolos não sabem o que dizem.',
    'Volta teu rosto sempre na direção do sol, e então as sombras ficarão para trás.',
    'O invejoso adoece quando seu vizinho passa bem.',
    'Quando ouvir algo a respeito dos maus atos de alguém, não ouça até o final e tente esquecer o que ouviu.',
    'Um coração alegre faz tanto bem quanto os remédios.',
    'Se não tens tempo para fazer uma coisa bem feita, como é que vais arranjar tempo para a fazer outra vez?',
    'Quando se busca o cume da montanha, não se dá importância às pedras do caminho',
    'Se quer plantar para poucos dias, plante flores. Se quer plantar por muitos anos, plante uma árvore. Se quer plantar para a eternidade, plante idéias.',
    'Homens fortes criam tempos fáceis e tempos fáceis geram homens fracos, mas homens fracos criam tempos difíceis e tempos difíceis geram homens fortes.'

  ];



  return (
    <View style={styles.container}>
      <Image source={require('./assets/cookie.png')} />
      <Text style={styles.frases}>"{texto}"</Text>

      <TouchableOpacity style={styles.botao} onPress={() => {
        let r = Math.floor(Math.random() * frases.length);
        let textoNovo = frases[r]
        setTexto(textoNovo)
      }}>

        <View>
          <Text style={styles.txtBotao}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#D2691E',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBotao: {
    fontSize: 20,
    color: '#D2691E',
    fontWeight: 'bold'
  },
  frases: {
    fontSize: 17,
    color: '#D2691E',
    margin: 30,
    fontStyle: 'italic',
    alignItems: 'center',
  }
});
