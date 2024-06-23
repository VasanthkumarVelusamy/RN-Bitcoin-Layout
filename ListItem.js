import { View, StyleSheet, Text} from 'react-native'

export default function ListItem({children}) {
    return (
        <View style={style.listItem}>
            <View style={style.icon}></View>
            <Text style={style.name}>{children}</Text>
        </View>
    )
}

const style = StyleSheet.create({
   listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:20,
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 70,
    paddingHorizontal: 20
   } ,
   icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'green'
   },
   name: {
    fontWeight: 'bold'
   }
})