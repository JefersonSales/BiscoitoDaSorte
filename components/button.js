import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';


export function Button(props) {
  return (
    <TouchableOpacity {...props} style={styles.botao} onPress={props.onPress}>
      <Text style={styles.txtBotao}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    margin: 3,
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
});