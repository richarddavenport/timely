import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { Vibration } from "react-native";
import MeetScanner from "../components/MeetScanner";
import { Text, View } from "../components/Themed";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const onScan = async (data: string) => {
    try {
      await AsyncStorage.setItem("meet_data", data);
      Vibration.vibrate();
      navigation.navigate("Details");
    } catch (e) {
      alert("Unable to save QR Code data!");
    }
  };

  return <MeetScanner onScan={onScan}></MeetScanner>;
}

export function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
