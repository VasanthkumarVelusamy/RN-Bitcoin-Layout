import { View, StyleSheet} from 'react-native'
import CardView from './CardView'

export default function CardContainer() {
    return (
        <View style={style.container}>
            <CardView></CardView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignSelf:'stretch',
        paddingLeft: 20,
        paddingRight: 20
    }
})