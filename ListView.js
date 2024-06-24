import {View, StyleSheet, Text, FlatList} from 'react-native'
import data from './ListData'
import ListItem from './ListItem'

export default function ListView() {
    const some = "vasanth"
    return (
        <View style={style.list}>
            <FlatList 
            style={style.flatlist}
                data={data}
                renderItem={({item, }) => (<ListItem> {item.value} </ListItem>)}
            />
            
            {/* <ListItem>Ethereum</ListItem>
            <ListItem>Theter</ListItem>
            <ListItem>Polkadot</ListItem>
            <ListItem>Cardano</ListItem>
            <ListItem>Polkadot</ListItem>
            <ListItem>Cardano</ListItem> */}
        </View>
    )
}

const style = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 25
    },
    flatlist: {
        flexDirection: 'column',
        flex:1
    },
    listitem: {
        margin: 5,
        padding: 5
    }
})

