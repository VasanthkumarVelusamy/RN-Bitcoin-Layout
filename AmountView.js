import { View, StyleSheet, Text} from 'react-native'
import CardView from './CardView'

export default function AmountView() {
    return (
        <View style={style.container}>
            <Text style={style.amountHeading}>Your Balance</Text>
            <Text style={style.amount}>$5,123.22</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignSelf:'stretch',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    amount: {
        fontSize: 40,
        color: 'white'
    },

    amountHeading: {

        color: 'white'
    }
})