import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponents from './Components/FirstComponen';

export default function App() {
  return (
    <View style={{ width: 250, backgroundColor : 'yellow'}}>
      <FirstComponents></FirstComponents>
      <Text>Hello Word!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
