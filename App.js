import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { Button } from './components'



export default function App() {
  const [texto, setTexto] = useState("Biscoito da sorte");
  const [img, setImg] = useState(require('./assets/cookie.png'));
  const [label, setLabel] = useState('Quebrar biscoito');
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

  function handleButton() {
    if (label === 'Quebrar biscoito') {
      setImg(require('./assets/broken_cookie.png'));
      setLabel("Novo biscoito")
      let r = Math.floor(Math.random() * frases.length);
      setTexto(frases[r]);
    }
    else {
      setImg(require('./assets/cookie.png'));
      setLabel("Quebrar biscoito")
      setTexto("Biscoito da sorte");
    }
    // let textoNovo = frases[r]
  }


  return (
    <SafeAreaView style={styles.container}>
      <Image source={img} />
      <Text style={styles.frases}>"{texto}"</Text>
      <Button onPress={() => handleButton()} text={label} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frases: {
    fontSize: 17,
    color: '#D2691E',
    margin: 30,
    fontStyle: 'italic',
    alignItems: 'center',
  }
});
