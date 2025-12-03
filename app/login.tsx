import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../styles/colors";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#555"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#555"
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 32,
    color: COLORS.text,
    marginBottom: 30,
    fontWeight: "bold"
  },
  input: {
    width: "90%",
    backgroundColor: COLORS.input,
    borderRadius: 10,
    padding: 12,
    marginVertical: 8
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.pink,
    padding: 15,
    borderRadius: 15,
    width: "90%",
    alignItems: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
