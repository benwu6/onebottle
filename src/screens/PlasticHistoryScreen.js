import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const PlasticHistoryScreen = () => {
  const [pieces, setPieces] = useState(0);
  const [pounds, setPounds] = useState(0);

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
          <Text style={styles.heading}>Plastic</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}></TouchableOpacity>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.dataAndText}>
          <View style={styles.blueCircle}>
            <Text style={styles.dataText}>{pieces}</Text>
          </View>
          <Text style={styles.dataWordText}>Total Pieces Recycled</Text>
        </View>
        <View style={styles.dataAndText}>
          <View style={styles.blueCircle}>
            <Text style={styles.dataText}>{pounds}</Text>
          </View>
          <Text style={styles.dataWordText}>Pounds Saved</Text>
        </View>
      </View>

      <View style={styles.greenBox}>
        <Text style={styles.historyHeading}>History</Text>
        <View style={styles.historyDataContainer}>
          <Text style={styles.dataSmallHeading}>Location</Text>
          <Text style={styles.dataSmallHeading}>Item</Text>
        </View>
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
    width: 162,
    height: 162,
    borderRadius: 200,
    backgroundColor: "#ACC1E295",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 30,
  },
  profileButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#8FBBAB",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
  },
  dataAndText: {
    display: "flex",
    alignItems: "center",
  },
  greenBox: {
    display: "flex",
    backgroundColor: "#8FBBAB80",
    borderRadius: 50,
    marginTop: 40,
    width: 338,
    height: 360,
  },
  historyDataContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 35,
    paddingRight: 35,
  },

  // text styles
  heading: {
    fontSize: 40,
    fontFamily: "Mandali",
  },
  historyHeading: {
    fontSize: 30,
    fontFamily: "Mandali",
    marginLeft: 30,
    marginTop: 5,
  },
  dataText: {
    fontSize: 40,
    fontFamily: "Madali",
  },
  dataWordText: {
    fontSize: 15,
    fontFamily: "Mandali",
  },
  trackerText: {
    fontFamily: "KdamThmor",
    fontSize: 100,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
  dataSmallHeading: {
    fontSize: 15,
    fontFamily: "Mandali",
    flex: 1,
  },

  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default PlasticHistoryScreen;
