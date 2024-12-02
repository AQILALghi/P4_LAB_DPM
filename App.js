import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import MatchInfo from "./src/components/MatchInfo";

const ScoreControls = ({ team, score, onIncrement, onDecrement }) => (
  <View style={styles.teamContainer}>
    <Text style={styles.teamName}>{`Team ${team}`}</Text>
    <Text style={styles.score}>{score}</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity
        style={[styles.controlButton, { backgroundColor: "#4caf50" }]}
        onPress={() => onIncrement(team)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.controlButton, { backgroundColor: "#f44336" }]}
        onPress={() => onDecrement(team)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleIncrement = (team) => {
    if (team === "A") {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) Alert.alert("Congratulations!", "Team A Wins!");
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) Alert.alert("Congratulations!", "Team B Wins!");
    }
  };

  const handleDecrement = (team) => {
    if (team === "A" && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === "B" && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <MatchInfo teamA="Team A" teamB="Team B" />
      <View style={styles.scoreContainer}>
        <ScoreControls
          team="A"
          score={teamAScore}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <ScoreControls
          team="B"
          score={teamBScore}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(teamAScore / 10) * 100}%`, backgroundColor: "#4caf50" },
          ]}
        />
        <View
          style={[
            styles.progressBar,
            { width: `${(teamBScore / 10) * 100}%`, backgroundColor: "#f44336" },
          ]}
        />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
    padding: 20,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: "100%",
  },
  teamContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flex: 1,
    margin: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3f51b5",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  controlButton: {
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  progressBarContainer: {
    flexDirection: "row",
    width: "100%",
    height: 10,
    backgroundColor: "#cfd8dc",
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 20,
  },
  progressBar: {
    height: "100%",
  },
  resetButton: {
    backgroundColor: "#3f51b5",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
