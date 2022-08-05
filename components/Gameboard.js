import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Square from './Square.js'

const GameBoard = () => {

      const [timeLeft, setTimeLeft] = useState(60 )

    useEffect(() => {
       if (!timeLeft) return
      const timerId = setInterval(() =>{
      //happens every 1000ms
      setTimeLeft(timeLeft -1)
      },1000)
      return () => clearInterval(timerId)
      }, [timeLeft])

  return (
      <View style={StyleSheet.container}>
      <Text> Whack-a-mole App!</Text>
      <Text>{timeLeft}</Text>
       <View style={styles.game}>
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
 
 )
}
  const styles = StyleSheet.create({
   container: {
  flex: 1,
  backgroundColor: 'row',
  alignItems:'center',
   justifyContent: 'center',
 },
   game: {
  flexDirection:'row',
  flexWrap: 'wrap',
  width: 300,
   }
})

export default GameBoard

