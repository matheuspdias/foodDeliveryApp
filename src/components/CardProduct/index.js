import React from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardProduct({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerArea}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{ uri: data.cover }}
        />
      </View>
      <View style={styles.bodyArea}>
        <Text style={styles.categoryText}>{data.category.name}</Text>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.footerCardArea}>
          <Text style={styles.priceText}>$1.99</Text>
          <TouchableOpacity>
            <Ionicons name="add" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginBottom: 15,
    flex: 1,
    borderStyle: "solid",
    height: 250,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerArea: {
    backgroundColor: "#F5F7FA",
    width: "100%",
    height: "60%",
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
  },
  bodyArea: {
    flex: 1,
    borderBottomStartRadius: 14,
    borderBottomEndRadius: 14,
    backgroundColor: "#FFF",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: { flex: 1 },
  categoryText: {
    color: "#E6EFF6",
    fontSize: 14,
    fontWeight: "900",
  },
  name: {
    fontSize: 18,
    fontWeight: 400,
  },
  footerCardArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "600",
  },
});
