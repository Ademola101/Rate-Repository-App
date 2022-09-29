import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Main from './src/Components/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Main />
        <StatusBar style="auto" />
      </NativeRouter>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexGlow: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
