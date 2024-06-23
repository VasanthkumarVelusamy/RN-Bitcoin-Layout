import {View, Text, StyleSheet} from 'react-native'
import CardActionView from './CardActionView'
import AmountView from './AmountView'
import CardHeader from './CardHeader'

export default function CardView() {
    return (
        <View style={style.card}>
            <CardHeader></CardHeader>
            <AmountView></AmountView>
            <CardActionView></CardActionView>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: 'blue',
        height: 300,
        alignSelf: 'stretch',
        borderRadius: 30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingBottom: 10,
        paddingTop: 30,
        paddingHorizontal: 10
    }
})