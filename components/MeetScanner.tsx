import { BarCodeScannedCallback, BarCodeScanner } from "expo-barcode-scanner";
import { Camera, PermissionStatus } from "expo-camera";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { JobScan } from "../types";
import { Text, View } from "./Themed";

export default function MeetScanner({
  onScan,
}: {
  onScan: (data: JobScan) => any;
}) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  // This is to prevent multiple scans
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    try {
      setScanned(true);
      const scan: JobScan = JSON.parse(data);
      console.log(scan);
      onScan(scan);
    } catch (error) {
      alert(`Unable to scan QR Code!`);
      console.log(error);
      setScanned(false);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission.</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera.</Text>
      </View>
    );
  }

  return (
    <Camera
      barCodeScannerSettings={{
        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
      }}
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={[StyleSheet.absoluteFillObject]}
      ratio="16:9"
    ></Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
