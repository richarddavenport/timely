import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { Vibration } from "react-native";
import MeetScanner from "../components/MeetScanner";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const onScan = (data: string) => {
    Vibration.vibrate();
    navigation.navigate("Details");
  };

  return <MeetScanner onScan={onScan}></MeetScanner>;
}
