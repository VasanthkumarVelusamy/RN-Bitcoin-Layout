import {View, StyleSheet} from 'react-native'

export default function() {
    return (
        <View style={style.actionView}>
            <View style={style.smallSquare}></View>
            <View style={style.smallSquare}></View>
            <View style={style.smallSquare}></View>
            <View style={style.smallSquare}></View>
        </View>
    )
}

const style=StyleSheet.create({
    actionView: {
        height: 70,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    smallSquare: {
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: 'blue'
    }
})