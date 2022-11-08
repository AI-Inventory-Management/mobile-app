import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Form = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>NUEVA TIENDA</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.texts}>Nombre</Text>
          <TextInput style={styles.input} placeholder="Miscelánea Caro" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.texts}>Estado</Text>
          <TextInput style={styles.input} placeholder="Estado de México" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.texts}>Municipio</Text>
          <TextInput style={styles.input} placeholder="Xonacatlán" />
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationInputContainer}>
            <Text style={styles.texts}>Latitud</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.input, { width: "95%" }]}
              placeholder="-19.42"
            />
          </View>
          <View style={styles.locationInputContainer}>
            <Text style={styles.texts}>Longitud</Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.input, { width: "95%" }]}
              placeholder="32.42"
            />
          </View>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.texts}>Dirección</Text>
          <TextInput
            numberOfLines={1}
            style={styles.input}
            placeholder="Av. Jose Maria Morelos, San Francisco Tepojaco"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  formContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
  },
  texts: {
    fontSize: 14,
    color: "black",
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "#555",
    marginLeft: 2,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,

    shadowColor: "#555",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  inputContainer: {
    marginBottom: 20,
  },
  locationContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
  },
  locationInputContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 50,
    color: "white",
    padding: 16,
    marginTop: 24,
  },
  buttonText: {
    fontSize: 14,
    color: "#f9f9f9",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Form;
