import {View, Text, StyleSheet} from 'react-native'
import CardActionView from './CardActionView'
import AmountView from './AmountView'

export default function CardHeader() {
    return (
        <View style={style.header}>
            <View style={style.walletSelector}>
                <Text style={style.walletName}>Main Wallet</Text>
            </View>
            <View style={style.bell}></View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        height: 50,
        alignSelf: 'stretch',
        borderRadius: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    walletSelector: {
        height: 50,
        width: 150,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 30
    },
    walletName: {
        margin: 'auto',
        color: 'white'
    },
    bell: {
        width: 20,
        height: 20,
        borderColor: 'white',
        borderWidth: 1
    }
})