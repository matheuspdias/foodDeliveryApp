import React from "react";
import { View, Text } from "react-native";

export default function CardProduct({ data }) {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
