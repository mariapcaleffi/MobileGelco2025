import React, { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../styles/colors";

export default function Unitarios() {
  const [modalVisible, setModalVisible] = useState(false);
  const [registros, setRegistros] = useState<any[]>([]);
  const [form, setForm] = useState({ data: "", turno: "", peso: "", operador: "", etiqueta: "" });

  function salvar() {
    setRegistros([...registros, form]);
    setForm({ data: "", turno: "", peso: "", operador: "", etiqueta: "" });
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Unitários</Text>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnText}>+ Adicionar Registro</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={[styles.row, { backgroundColor: COLORS.aqua }]}>
  <Text style={[styles.cell, styles.headerText]}>DATA</Text>
  <Text style={[styles.cell, styles.headerText]}>TURNO</Text>
  <Text style={[styles.cell, styles.headerText]}>PESO</Text>
  <Text style={[styles.cell, styles.headerText]}>OPERADOR</Text>
  <Text style={[styles.cell, styles.headerText]}>ETIQUETA</Text>
</View>

        {registros.map((r, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.cell}>{r.data}</Text>
            <Text style={styles.cell}>{r.turno}</Text>
            <Text style={styles.cell}>{r.peso}</Text>
            <Text style={styles.cell}>{r.operador}</Text>
            <Text style={styles.cell}>{r.etiqueta}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Registro Unitário</Text>

            {["data", "turno", "peso", "operador", "etiqueta"].map((campo) => (
              <TextInput
                key={campo}
                placeholder={campo.toUpperCase()}
                style={styles.input}
                value={(form as any)[campo]}
                onChangeText={(v) => setForm({ ...form, [campo]: v })}
              />
            ))}

            <TouchableOpacity style={styles.saveButton} onPress={salvar}>
              <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ color: COLORS.pink, marginTop: 10, textAlign: "center" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
    headerText: {
  fontWeight: "bold",
  color: COLORS.text
},

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 15
  },
  addButton: {
    backgroundColor: COLORS.pink,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  row: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  cell: {
    flex: 1,
    color: COLORS.text
  },
  modalBg: {
    flex: 1,
    backgroundColor: "#0008",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "85%"
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    marginVertical: 6
  },
  saveButton: {
    backgroundColor: COLORS.aqua,
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  }
});
