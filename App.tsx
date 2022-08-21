import { Alert, StyleSheet, Text, View } from "react-native";
import { Loader } from "./src/components/Loading/Loader";
import Geolocation from "@react-native-community/geolocation";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import axios from "axios";
import { MainPage } from "./src/components/MainPage/MainPage";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiKey = "1ad28fc244af20a3e6ee1a6f79970811";
  const [weatherData, setWeatherData] = useState<any>({});

  const getWeather = async ({
    latitude,
    longitude,
  }: {
    latitude: Number;
    longitude: Number;
  }) => {
    console.log(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );

    setWeatherData(data);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather({ latitude, longitude });
      setIsLoading(false);
      // API Request
    } catch (err) {
      Alert.alert("Разрешение местоположения", "Грустно :(");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <MainPage data={weatherData}></MainPage>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
