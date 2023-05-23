import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CardProduct({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    marginRight: 5,
    width: "50%",
    height: 250,
    marginBottom: 15,
  },
});
