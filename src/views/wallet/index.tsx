import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "./components/header";
import Portifolio from "./components/portifolio";
import { WalletList } from "./components/wallet";

export default function Wallet() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Portifolio />
        <WalletList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
