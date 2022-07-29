import { React } from 'react';
import { StyleSheet, View, Text } from 'react-native';


    const Square = () => {
        const [moleActive, setMoleActive] = useState(false)

        const randomTime = Math.random() * 20000

        useEffect(() => {
            const timerId = setInterval(() => {
                setMoleActive(true)
                setTimeout(() => {setMoleActive(false)}, 800)
            }, randomTime)
            setTimeout(endGame, time * 1000 )
        }, [])

        return(
            <View style={moleActive? style.mole : style.square}></View>
        )
    }

    const style = StyleSheet.create({
        square: {
            flex: 1,
            minWidth: 80,
            minHeight: 80,
            margin: 10,
            backgroundColor: 'red',
        },
        mole: {
            flex: 1,
            minWidth: 80,
            minHeight: 80,
            margin: 10,
            backgroundColor: 'blue',
        }
    });

    export default Square