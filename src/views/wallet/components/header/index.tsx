import { View, StyleSheet } from "react-native";
import { Avatar, Button, Icon } from "react-native-paper";

export default function Header() {
  return (
    <View style={styles.header}>
      <Avatar.Text label="TM" size={32} />
      <Button onPress={() => {}}>
        <Icon source={"refresh"} size={32} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
});
