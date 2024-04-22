import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ListItem } from "./components/list-item";
import { useCallback, useEffect, useState } from "react";
import httpService from "../../../../services/http.service";
import { Item } from "../../../../types";

export function WalletList() {
  const [cryptos, setCryptos] = useState(null);

  const getCryptos = useCallback(async () => {
    const data = await httpService.get<Item>("cryptos");
    return data;
  }, [cryptos]);

  useEffect(() => {
    if (cryptos === null) {
      getCryptos().then((data) => {
        setCryptos(data);
      });
    }
  }, [getCryptos]);

  return (
    <View style={styles.wallet}>
      <Text variant="bodySmall">Wallet</Text>
      {cryptos === null && <Text>Loading</Text>}
      {cryptos !== null && (
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
          data={cryptos}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wallet: { padding: 24 },
});
