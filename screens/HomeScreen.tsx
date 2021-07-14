import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, TouchableOpacity, Vibration } from "react-native";
import MeetScanner from "../components/MeetScanner";
import { Text, View } from "../components/Themed";
import Storage from "../constants/Storage";
import { JobScan } from "../types";

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [scanning, setScanning] = React.useState(false);
  const onScan = async (data: JobScan) => {
    try {
      await AsyncStorage.setItem(Storage.JOB_SCAN, JSON.stringify(data));
      Vibration.vibrate();
      navigation.navigate("Timer");
      setScanning(false);
    } catch (e) {
      alert("Unable to save QR Code data!");
    }
  };

  return scanning ? (
    <MeetScanner onScan={onScan}></MeetScanner>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>
        Scan the QR code for the job you will performing.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => setScanning(true)}>
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "lightblue",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
