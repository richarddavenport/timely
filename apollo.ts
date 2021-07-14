import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
} from '@apollo/client'

const makeApolloClient = () => {

  // create an apollo link instance, a network interface for apollo client
  const link = new HttpLink({
    uri: `http://198.211.96.24/v1/graphql`,
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  });

  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache()

  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache
  });

  return client;
}

export default makeApolloClient;