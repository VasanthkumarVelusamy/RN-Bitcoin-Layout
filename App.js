import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import CardView from './CardView';
import CardContainer from './CardContainer';
import ListView from './ListView';

export default function App() {
  return (
    <View style={styles.container}>
      <CardContainer/>
      <ListView></ListView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    gap: 30,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {paddingTop: 50},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },
});
