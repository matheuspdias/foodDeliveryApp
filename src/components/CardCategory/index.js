import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import noses from "../../assets/images/no-image.png";

export default function CardCategory({ data, active, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(data.id)}
      disabled={disabled}
    >
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: active ? "#FF6000" : disabled ? "gray" : "#F5F7FA",
          },
        ]}
      >
        {data.cover ? (
          <Image style={styles.image} source={{ uri: data.cover }} />
        ) : (
          <Image style={styles.image} source={noses} />
        )}
      </TouchableOpacity>
      <Text style={styles.textName}>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    marginTop: 8,
    paddingLeft: 5,
    alignSelf: "flex-start",
  },
  image: {
    width: "60%",
    height: "60%",
  },
});
