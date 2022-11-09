import React from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Form = () => {

  return (
    <ScrollView>
    <View style={{ width: "100%", height: "100%", overflow: "scroll"}}>
      <View style={styles.topbar}>
        <Text style={styles.title}>TIENDA NUEVA</Text>
        <Image style={styles.logo} source={require("../images/logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={{width: "100%", padding: 30}}>
          <Text style={styles.texts}>Nombre</Text>
          <TextInput style={styles.input} placeholder="Ej. Oczo" />
          <Text style={styles.texts}>Estado</Text>
          <TextInput style={styles.input} />
          <Text style={styles.texts}>Municipio</Text>
          <TextInput style={styles.input} />
          <View style={styles.column}>
            <View style={{width: "35%"}}>
              <Text style={styles.texts}>Latitud</Text>
              <TextInput style={styles.miniInput} placeholder="Ej. -19.42" />
            </View>
            <View style={{width: "35%"}}>
              <Text style={styles.texts}>Longitud</Text>
              <TextInput style={styles.miniInput} placeholder="Ej. -19.42" />
            </View>
            <View style={{width: "30%"}}>
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
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    margin: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  texts: {
    fontWeight: "bold",
    color: "#636363",
    fontSize: RFPercentage(2.7),
    marginRight: RFValue(25)
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFFFFF",
    fontSize: RFPercentage(3.8),
    marginTop: 20,
    maxWidth: RFPercentage(48)
  },
  column: {
    flexDirection: "row",
    display: "flex",
    width: "100%"
  },
  input: {
    backgroundColor: "#E8E8E8",
    minwidth: RFPercentage(44),
    fontSize: RFPercentage(2),
    padding: RFPercentage(0.2),
    paddingLeft: RFValue(5),
    borderRadius: RFValue(8),
    marginBottom: RFValue(20),
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
    fontSize: RFPercentage(2),
    height: "auto",
    paddingLeft: RFValue(5),
    borderRadius: RFValue(10),
    marginBottom: RFValue(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginRight: RFValue(25)
  },
  button: {
    borderRadius: RFValue(10),
    width: 'auto',
    backgroundColor: "#8B0000",
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    borderRadius: RFValue(20),
    marginTop: RFValue(20),
    padding: 10
  },
  buttonText: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    color: 'white',
  },
  topbar: {
    paddingLeft: RFValue(10),
    backgroundColor: "#8B0000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: RFPercentage(15),
    height:RFPercentage(15),
    marginTop: 20
  },
});

export default Form;
