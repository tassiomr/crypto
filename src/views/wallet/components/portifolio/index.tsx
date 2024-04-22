import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Portifolio() {
  return (
    <View style={styles.portifolioContent}>
      <View style={styles.valueContent}>
        <Text variant="labelLarge">$</Text>
        <Text variant="displayMedium">14000.43</Text>
      </View>
      <Text variant="bodyLarge">Portifolio Value</Text>
      <Text variant="bodyMedium" style={{ color: "yellowgreen" }}>
        +1525.30 (14%)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  portifolioContent: {
    marginTop: 32,
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },

  valueContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
