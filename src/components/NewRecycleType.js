import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const NewRecycleType = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ACC1E2",
    width: 154,
    height: 154,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default NewRecycleType;
