import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const RecycleType = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8FBBAB",
    width: 80,
    height: 80,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecycleType;
