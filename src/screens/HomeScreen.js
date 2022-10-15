import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import RecycleType from "../components/RecycleType";

const HomeScreen = () => {
  const [total, setTotal] = useState(0);
  const [days, setDays] = useState(0);

  const [loaded] = useFonts({
    Mandali: require("../assets/fonts/Mandali-Regular.ttf"),
    KdamThmor: require("../assets/fonts/KdamThmorPro-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../assets/sea-background.png")}
      />
      <View style={styles.headingBar}>
        <View style={styles.headingBox}>
          <Text style={styles.heading}>One Bottle</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}></TouchableOpacity>
      </View>
      <View style={styles.blueCircle}>
        <Text style={styles.trackerText}>{total}</Text>
        <Text style={styles.daysText}>{days} days</Text>
      </View>
      <TouchableOpacity style={styles.newButton}>
        <Text style={styles.heading}>New Recycle</Text>
      </TouchableOpacity>

      <View style={styles.historyButtons}>
        <RecycleType title="Plastic"></RecycleType>
        <RecycleType title="Battery"></RecycleType>
        <RecycleType title="Paper"></RecycleType>
      </View>
      <View style={styles.historyButtons2}>
        <RecycleType title="Glass"></RecycleType>
        <RecycleType title="Metal"></RecycleType>
        <RecycleType title="Other"></RecycleType>
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
  headingBar: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginTop: 70,
    alignItems: "center",
  },
  headingBox: {
    width: 185,
    height: 91,
    marginLeft: 24,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 100,
  },
  blueCircle: {
    display: "flex",
    width: 272,
    height: 275,
    marginTop: 30,
    borderRadius: 200,
    backgroundColor: "#ACC1E2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newButton: {
    width: 315,
    height: 60,
    backgroundColor: "#D9D9D9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 30,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 5 },
  },
  historyButtons: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 40,
  },
  historyButtons2: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 40,
  },

  // text styles
  heading: {
    fontSize: 30,
    fontFamily: "Mandali",
  },
  daysText: {
    fontSize: 20,
    fontFamily: "Madali",
  },
  trackerText: {
    fontFamily: "KdamThmor",
    fontSize: 100,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
  profileButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#8FBBAB",
  },

  //other styles
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default HomeScreen;
