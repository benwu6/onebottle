import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import NewRecycleType from "../components/NewRecycleType";

const NewItem = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../assets/sea-background.png")}
      />
      <View style={styles.headingBox}>
        <Text style={styles.heading}>New Item</Text>
      </View>
      <View style={styles.circleContainer}>
        <NewRecycleType title="Plastic"></NewRecycleType>
        <NewRecycleType title="Battery"></NewRecycleType>
        <NewRecycleType title="Paper"></NewRecycleType>
        <NewRecycleType title="Glass"></NewRecycleType>
        <NewRecycleType title="Metal"></NewRecycleType>
        <NewRecycleType title="Other"></NewRecycleType>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  headingBox: {
    width: 330,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 57,
  },
  circleContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  // text styles
  heading: {
    fontSize: 30,
    fontFamily: "Mandali",
  },

  //other styles
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default NewItem;
