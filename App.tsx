import { StatusBar } from 'expo-status-bar';
import { Alert, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Wallet from './src/views/wallet';

export default function App() {
  return (
    <View style={styles.container}>
      <Wallet />
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
