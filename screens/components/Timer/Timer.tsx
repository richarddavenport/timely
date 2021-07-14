import { useQuery } from "@apollo/client";
import { Picker } from "@react-native-picker/picker";
import gql from "graphql-tag";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import { GetMeetInfoQuery } from "../../../generated/graphql";
import CenterSpinner from "./../../components/Util/CenterSpinner";
import LaneSelection from "./LaneSelection";

const GET_MEET_INFO = gql`
  query getMeetInfo($id: uuid!) {
    meet_by_pk(id: $id) {
      id
      meet_teams {
        team {
          name
        }
      }
    }
    available_lanes: lane_aggregate(
      where: { heat: { event: { meet_id: { _eq: $id } } } }
      distinct_on: [number]
    ) {
      nodes {
        number
      }
    }
  }
`;

export default function Timer({ meetId }: { meetId: string }) {
  const { loading, error, data } = useQuery<GetMeetInfoQuery>(GET_MEET_INFO, {
    variables: {
      id: meetId,
    },
  });

  if (loading) {
    return <CenterSpinner />;
  }

  return (
    <View style={styles.container}>
      {error && <Text>Error: {JSON.stringify(error)}</Text>}
      {data && data.meet_by_pk && <LaneSelection data={data}></LaneSelection>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
