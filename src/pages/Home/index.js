import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import api from "../../services/api";
import CardCategory from "../../components/CardCategory";

export default function Home() {
  const [categories, setCategories] = useState([]);

  const [selectedId, setSelectedId] = useState(null);

  const onSelect = (id) => {
    setSelectedId(id);
    console.log(id);
  };

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("/categories");
      setCategories(response.data);
      setSelectedId(response.data[0]?.id ?? null);
    }
    getCategories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Bom para você.</Text>
          <Text style={styles.title}>Ótimo para a vida.</Text>
        </View>
        <View style={styles.notificationArea}>
          <Ionicons name="notifications-outline" size={24} />
        </View>
      </View>

      <View style={styles.form}>
        <Ionicons style={{ marginRight: 20 }} name="search" size={24} />
        <TextInput
          style={styles.inputSearch}
          placeholder="
          O que você está procurando?"
        />
        <Ionicons name="filter" size={24} />
      </View>
      <Text style={styles.titleCategory}>Categories</Text>

      <View style={styles.flatListCategoryArea}>
        <FlatList
          data={categories}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardCategory
              data={item}
              active={item.id === selectedId}
              onPress={onSelect}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 36,
    paddingStart: 16,
    paddingEnd: 16,
  },
  headerArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    lineHeight: 35,
  },
  notificationArea: {
    backgroundColor: "#F1F1F1",
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    flexDirection: "row",
    backgroundColor: "#F5F7FA",
    width: "100%",
    borderRadius: 30,
    borderColor: "#ECECEC",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputSearch: {
    width: "85%",
    height: 70,
    fontSize: 18,
  },
  titleCategory: {
    fontSize: 26,
    marginTop: 20,
    fontWeight: "500",
  },
  flatListCategoryArea: {
    height: 130,
    width: "100%",
  },
});
