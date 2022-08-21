import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Загрузка погоды...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#f1f2f3",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
