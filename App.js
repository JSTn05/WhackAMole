import { react } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Square from './components/Square'

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Whack-A-Mole App</Text>
      <View style={style.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  );
  
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      background: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    game: {
      flexDirection: 'row',
      flewWrap: 'wrap',
      width: 300,
    }
    
  });







