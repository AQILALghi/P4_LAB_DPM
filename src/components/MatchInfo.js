import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchInfo = ({ teamA, teamB }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Match</Text>
      <Text style={styles.team}>🏅 {teamA} vs {teamB} 🏅</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  team: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default MatchInfo;
