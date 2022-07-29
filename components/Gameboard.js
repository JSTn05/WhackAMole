import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Square from './Square.js'

    const Gameboard = () => {
        let time = 60
        const [timeleft, setTimeLeft] = useState (time)

        useEffect(() => {
            if(!timeleft) return
            const timerId = setInterval (() => {
                //happens every 1000ms
                setTimeLeft(timeLeft-1)
        }, 1000)
        return () => clearIntercal(timerId)
    }, [timeLeft])

    return (
    <View style={styles.container}>
      <Text>Ania's  Whack-A-Mole App!</Text>
      <View style={style.game}>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
        <Square time={time}></Square>
      </View>
    </View>
         );
    }
    const style = StyleSheet.create({
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
    