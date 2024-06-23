import {View, StyleSheet, Text} from 'react-native'
import ListItem from './ListItem'

export default function ListView() {
    return (
        <View style={style.list}>
            <ListItem>Bitcoin</ListItem>
            <ListItem>Ethereum</ListItem>
            <ListItem>Theter</ListItem>
            <ListItem>Polkadot</ListItem>
            <ListItem>Cardano</ListItem>
        </View>
    )
}

const style = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 25
    }
})