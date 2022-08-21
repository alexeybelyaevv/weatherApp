import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const MainPage = (weatherData: any) => {
  console.log(weatherData);

  return (
    <View style={styles.container}>
      <Text>{weatherData.data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
