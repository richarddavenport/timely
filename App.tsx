import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import makeApolloClient from "./apollo";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import CenterSpinner from "./screens/components/Util/CenterSpinner";

export default function App() {
  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  const fetchSession = async () => {
    // const session = await AsyncStorage.getItem("@todo-graphql:session");
    // const sessionObj = JSON.parse(session ?? "");
    // const { token, id } = sessionObj ?? { id: null, token: null };

    const client = makeApolloClient();

    setClient(client);
  };

  React.useEffect(() => {
    fetchSession();
  }, []);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete || !client) {
    return <CenterSpinner />;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar backgroundColor="lightblue" style="dark" />
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
