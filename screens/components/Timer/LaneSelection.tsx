import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet } from "react-native";
import Layout from "../../../constants/Layout";
import { GetMeetInfoQuery } from "../../../generated/graphql";

interface LaneSelectionInput {
  data: GetMeetInfoQuery;
}

export default function LaneSelection({ data }: LaneSelectionInput) {
  const [lane, setLane] = React.useState<number | null>(null);

  const width = Layout.window.width / 2;
  const items = data.available_lanes.nodes.map((item, key) => (
    <Picker.Item label={`Lane ${item.number}`} value={item.number} key={key} />
  ));

  return (
    <Picker
      style={{ ...styles.picker, width }}
      selectedValue={lane}
      onValueChange={(itemValue, itemIndex) => setLane(itemValue)}
    >
      {items}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {},
});
