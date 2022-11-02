import React from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";

const Form = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NUEVA TIENDA</Text>
      <View>
        <Text style={styles.texts}>Nombre</Text>
        <TextInput style={styles.input} placeholder="Ej. Oczo" />
        <Text style={styles.texts}>Estado</Text>
        <TextInput style={styles.input} />
        <Text style={styles.texts}>Municipio</Text>
        <TextInput style={styles.input} />
        <View style={styles.column}>
          <View>
            <Text style={styles.texts}>Latitud</Text>
            <TextInput style={styles.miniInput} placeholder="Ej. -19.42" />
          </View>
          <View>
            <Text style={styles.texts}>Longitud</Text>
            <TextInput style={styles.miniInput} placeholder="Ej. -19.42" />
          </View>
          <View>
            <Text style={styles.texts}>CP</Text>
            <TextInput style={styles.miniInput} placeholder="Ej. 53100" />
          </View>
        </View>
        <Text style={styles.texts}>Dirección</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Av. Jose Maria Morelos, San Francisco Tepojaco"
        />
      </View>
      <Button
        title="Enviar"
        accessibilityLabel="Learn more about this purple button"
        color="#B5271C"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    margin: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  texts: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    width: 80,
    color: "#636363",
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "left",
    margin: "auto",
    marginBottom: 20,
  },
  column: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#E8E8E8",
    width: 250,
    padding: 0,
    paddingLeft: 5,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  miniInput: {
    backgroundColor: "#E8E8E8",
    width: 70,
    padding: 0,
    paddingLeft: 5,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  button: {
    paddingTop: 20,
    borderRadius: 10
  },
});

export default Form;
