import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import gql from "graphql-tag";
import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import Storage from "../constants/Storage";
import { JobScan } from "../types";
import Timer from "./components/Timer/Timer";

export default function  TimerScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [meetId, setMeetId] = React.useState<string | null>(null);

  const readItemFromStorage = async () => {
    const item = await AsyncStorage.getItem(Storage.JOB_SCAN);
    try {
      const jobScan: JobScan = item ? JSON.parse(item) : null;
      setMeetId(jobScan.meetId);
    } catch (error) {}
  };

  React.useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={styles.container}>
      {meetId ? <Timer meetId={meetId}></Timer> : <Text>No meet found!</Text>}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Rescan QR Code</Text>
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
