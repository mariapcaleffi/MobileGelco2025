import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../styles/colors";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma opção</Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/unitarios")}>
        <Text style={styles.cardText}>Gerenciar Unitários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, { backgroundColor: COLORS.aqua }]} onPress={() => router.push("/lotes")}>
        <Text style={styles.cardText}>Gerenciar Lotes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    color: COLORS.text,
    fontWeight: "bold",
    marginBottom: 30
  },
  card: {
    backgroundColor: COLORS.pink,
    padding: 25,
    borderRadius: 15,
    marginVertical: 15
  },
  cardText: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
