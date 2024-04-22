import { TouchableOpacity, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { Item } from "../../../../../types";

export const ListItem = ({ item }: { item: Item }) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
      }}
    >
      <Avatar.Text
        label={item.label}
        size={38}
        style={{ backgroundColor: "blue" }}
      />
      <View style={{ padding: 8, flex: 1 }}>
        <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
          {item.name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "lightgray" }}>{item.shortName}</Text>
          <Text style={{ color: "lightgray" }}>
            {"*"} ${item.value}
          </Text>
        </View>
      </View>
      <View style={{ padding: 8, alignItems: "flex-end" }}>
        <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
          {item.valuePerDolar}
        </Text>
        <Text variant="bodyMedium" style={{ color: "yellowgreen" }}>
          {item.percent}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};
